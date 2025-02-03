import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./src/config/db.js";
import formDataRoutes from "./src/routes/formDataRoutes.js";
import packageRoutes from "./src/routes/packageRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8090;

//comment out to make it work normally
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});
//till here

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
