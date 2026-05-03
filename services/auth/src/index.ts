import express, { type Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
