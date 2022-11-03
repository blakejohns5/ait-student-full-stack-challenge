import mongoose from 'mongoose';
import validator from 'validator'
// import bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Email is required'],
      validate: {
        validator: (value) => validator.isEmail(value),
        message: (props) => `The email ${props.value} is not valid`
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [4, 'Password is too short'],
    }
  },
  { timestamps: true },
)



const UserModel = new mongoose.model('users', UserSchema);


export default UserModel;