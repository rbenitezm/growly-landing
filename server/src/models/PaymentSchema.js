import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  amount: Number,
  currency: String,
  status: String,
  transactionId: String,
  paymentDate: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", PaymentSchema);
