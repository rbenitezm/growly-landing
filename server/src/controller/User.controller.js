import User from "../models/User.js";

export const submitQuizResponse = async (req, res) => {
  try {
    const formData = req.body.formData;
    console.log(formData);

    if (!formData) {
      return res.status(400).json({ error: "No form data provided" });
    }

    const user = new User(formData);

    await user.save();
    console.log("Form data saved successfully");

    return res
      .status(201)
      .json({ message: "Form data saved successfully", user });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: error.message });
  }
};
