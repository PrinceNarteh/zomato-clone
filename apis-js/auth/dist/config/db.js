import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_NAME,
        });
        console.info("Connected to MongoDB Successfully!");
    }
    catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
};
