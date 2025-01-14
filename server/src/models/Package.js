import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  email: String,
  packageType: String,
  startDate: String,
  endDate: String,
  Paymentstatus: Boolean,
  price: String,
});

export default mongoose.model("Package", PackageSchema);
