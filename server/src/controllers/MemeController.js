import { MemeModel, UserModel } from "../models/index.js";



const getAllMemes = async (req, res, next) => {
  try {
    const memes = await MemeModel.find({})
    res.status(200).send({
      memes: memes
    })
  } catch (error) {
    next(error)
  }
}


const getMemesByUser = async (req, res, next) => {
  const { _id } = req.params;
  console.log(_id)
  try {
    const user = await UserModel.find({ _id: _id })
      .select({        
        'memes': 1
      }).exec()    
      console.log(user)
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
}


const createMeme = async (req, res, next) => {
  const { _id } = req.user.user;
  console.log(_id)
  const { title, url, category } = req.body;

  try {
    const newMeme = await MemeModel.create({ title, url, category, createdBy: req.user.user._id })
    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: req.user.user._id }, 
      {
        $push: {
          memes: newMeme._id,
        }
      })  
      console.log(updatedUser)
    res.status(201).send({
      message: 'Meme created successfully',
      meme: newMeme
    })
  } catch (error) {
    next(error)
  }
}


const deleteMeme = async (req, res, next) => {
  const id = req.body
  try {
    const meme = await MemeModel.findAndDelete({ _id: id })
    res.status(200).send({
      message: 'Meme deleted successfully',
      meme,
    })
  } catch (error) {
    next(error)
  }
}



const updateMeme = async (req, res, next) => {
  const { id, name, url, type } = req.body
  const filter = { _id: id };
  const update = { name, url, type };
  try {
    const meme = await MemeModel.findOneAndUpdate(filter, update, {
      new: true
    })
    res.status(200).send({
      message: 'Meme deleted successfully',
      meme,
    })
  } catch (error) {
    next(error)
  }
}


export { getAllMemes, getMemesByUser, updateMeme, createMeme, deleteMeme }