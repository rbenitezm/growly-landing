import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./src/config/db.js";
import formDataRoutes from "./src/routes/formDataRoutes.js";
import packageRoutes from "./src/routes/packageRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8090;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Default path accessed." });
  // res.send("Default path accesed");
});

app.use("/api/form", formDataRoutes);
app.use("/api/cart", packageRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
