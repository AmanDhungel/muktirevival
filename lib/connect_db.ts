import mongoose from "mongoose";
export const connect_db = async () => {
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
