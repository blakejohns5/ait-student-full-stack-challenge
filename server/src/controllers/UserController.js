import { UserModel } from "../models/index.js";




const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find({})
    res.status(200).send({
      users: users
    })
  } catch (error) {
    next(error)
  }
}



export { getAllUsers };