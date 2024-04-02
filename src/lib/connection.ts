import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
export const db = async () => {
  if (MONGO_URI) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("Connected");
    } catch (err) {
      console.error("Unable to connect to the database ", err);
    }
  } else {
    console.error("Mongo URL not found");
  }
};