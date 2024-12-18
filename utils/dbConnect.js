import mongoose from  "mongoose";
import config from "config";


// this below line is connecting db to our code


async function dbConnect() {
    try {
        let dbUrl = config.get("DB_URL")
        await mongoose.connect(dbUrl)
        console.log("Database connected succesfully");
    } catch (error) {
        console.log(error);
    }
}

dbConnect()