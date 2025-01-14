import express from "express";
import { submitQuizResponse } from "../controller/User.controller.js";

const router = express.Router();

router.get("/submit-form", async (req, res) => {
  try {
    console.log("Submit-form POST route accessed");
    res.status(201).json({ message: "Submit-form POST route accessed" });
  } catch (err) {
    console.error("Error accessing Submit-form POST route :", err);
    res.status(500).json({
      message: "Unable to access Submit-form POST route",
    });
  }
});

router.post("/submit-form", submitQuizResponse);

export default router;
