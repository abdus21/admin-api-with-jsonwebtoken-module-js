import mongoose from "mongoose";
/* import dotenv from "dotenv";

// config dotenv
dotenv.config() */
const connectMongoDB = async ()=>{

    try{
        let connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongo DB connection successful HOST : ${mongoose.connection.host}`.bgGreen.black);
    }catch(error){
        console.log(`${error}`.bgRed.white);
    }
}
export default connectMongoDB
