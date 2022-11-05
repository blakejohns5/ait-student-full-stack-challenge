import { UserModel } from '../models/index.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(email, password)
  try {
    const hashedPw = await bcrypt.hash(req.body.password, 10)
    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPw,
    })
    res.status(201).send({ data: 'User created successfully', username, email, _id: newUser._id});
  } catch (error) {
    console.log(error)
    next(error);
  }
}



const login = async (req, res, next) => {
  console.log(req.body)
  let user = await UserModel.find({ email: req.body.email })
  user == null && res.status(400).send('Cannot find user')
  user = user[0];
  console.log(user.password)
  try {
    
    if (await bcrypt.compare(req.body.password, user.password)) {
      console.log('pw same')
      jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' }, (err, token) => {
        res.status(200).send({ _id: user._id, email: user.email, token });
      })
    } else {
      res.status(500).send('Access denied');
    }
  } catch (error) {
    next(error);
  }
}







export { signup, login };