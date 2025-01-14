import express from "express";
import { addCartData } from "../controller/package.controller.js";

const router = express.Router();

// GET Route
router.get("/submit-cart", async (req, res) => {
  try {
    console.log("Submit-form GET route accessed");
    res.status(201).json({ message: "Submit-form GET route accessed" });
  } catch (err) {
    console.error("Error accessing Submit-form GET route :", err);
    res.status(500).json({
      message: "Unable to access Submit-form GET route",
    });
  }
});

// POST Route
router.post("/submit-cart", addCartData);

export default router;

// router.post("/submit-cart", async (req, res) => {
// 	try {
// 	  console.log(req.body);

// 	  console.log("Cart data POST route accessed");
// 	  res.status(201).json({ message: "Cart data POST route accessed" });
// 	} catch (err) {
// 	  console.error("Error accessing Cart data POST route :", err);
// 	  res.status(500).json({
// 		message: "Error accessing Cart data POST route :",
// 	  });
// 	}
//   });
