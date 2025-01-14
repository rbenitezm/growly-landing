import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  motorbikeLicense: {
    type: String,
    required: true,
  },
  motorbikeModel: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
  riderExperience: {
    type: String,
    required: true,
  },
  expectedExperience: {
    type: String,
    required: true,
  },
  excites: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);
