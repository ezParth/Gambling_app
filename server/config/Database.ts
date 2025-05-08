import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI || ""
export const connectDB = () => {
    console.log("MongoURI: ", MONGO_URI);
    mongoose.connect(MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log("!! ERROR DURING DATABASE CONNECTION IN Database.ts FILE: ", e))
}