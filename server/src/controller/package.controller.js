import Package from "../models/Package.js";

export const addCartData = async (req, res) => {
  try {
    console.log(req.body);
    const pkg = new Package(req.body);
    await pkg.save();
    console.log("Cart data added to DB successfully");
    res.status(201).json({ message: "Cart data added to DB successfully" });
  } catch (err) {
    console.error("Error adding Cart data to DB :", err);
    res.status(500).json({
      message: "Error adding Cart data to DB :",
      error: err.message,
    });
  }
};
