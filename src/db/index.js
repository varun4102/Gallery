import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{
    try {
        const connectionINFO = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionINFO.connection.host}`);
        

    } catch (error) {
        console.log("Mongodb connection Error: ", error);
        process.exit( 1);

    }
}

export default connectDB;