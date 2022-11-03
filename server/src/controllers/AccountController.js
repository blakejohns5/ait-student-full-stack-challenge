import { UserModel } from '../models/index.js'



const createAccount = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const newUser = await UserModel.create({
      email,
      password,
    })
    res.status(201).send({ data: 'User created successfully'});
  } catch (error) {
    console.log(error)
    next(error);
  }
}


export { createAccount };