import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { Routes } from "./Routes/leaderboard.routes.js";
dotenv.config();
const app = new express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at PORT ----> ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connnected successfully."))
  .catch((err) => console.log("Error connecting to database", err));

Routes(app);
