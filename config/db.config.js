import mongoose from "mongoose";


async function dbConnection(){
    await mongoose.connect(process.env.DB_STRING_CONN)
    console.log('DB connection OK')
}

export default dbConnection
