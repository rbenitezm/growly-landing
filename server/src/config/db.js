import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const MongoURI = process.env.MongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(MongoURI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Database connection error :", err);
    process.exit(1);
  }
};

export default connectDB;
