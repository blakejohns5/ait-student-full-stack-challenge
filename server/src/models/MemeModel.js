import mongoose from 'mongoose';
import validator from 'validator'
// import bcrypt from 'bcrypt';


const MemeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
      required: [true, 'URL is required']
    },
    category: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'user'
    }
  },
  { timestamps: true },
)



const MemeModel = new mongoose.model('meme', MemeSchema);


export default MemeModel;