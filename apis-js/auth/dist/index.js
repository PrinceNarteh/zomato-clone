import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { authRouter } from "./routes/auth.route.js";
// load environment variables
dotenv.config();
// connect to database
connectDB();
// initialize application
const app = express();
app.use(express.json());
// initialize routes
app.use("/api/auth", authRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});
