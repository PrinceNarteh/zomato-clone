import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: process.env.MONGODB_NAME as string,
    });
    console.info("Connected to MongoDB Successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
