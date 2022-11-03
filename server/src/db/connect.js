import mongoose from 'mongoose';



const connectDB = async () => {

  try {
    const connection = await mongoose.connect(
      `${process.env.DB_URL}`      
    )
    console.log(`MongoDB Connected: ${connection.connection.host}`)
    } catch (error) {
    console.log(error)
    process.exit(1);
  }
}


export default connectDB;



// console.log(process.env.MONGO_ATLAS_USER)
// const connectDB = () => {
//   return mongoose.connect(
//     `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PW}@ait-full-stack-challeng.94xvs56.mongodb.net/?retryWrites=true&w=majority`    ,
//   );  
// }


// export default connectDB;