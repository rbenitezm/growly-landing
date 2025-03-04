import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  riderExperience: {
    type: String,
    required: true,
  },
  ridingExperience: {
    type: String,
    required: true,
  },
  excitesAdventure: {
    type: String,
    required: true,
  },
  oftenRide: {
    type: String,
    required: true,
  },
  motorbikeLicense: {
    type: String,
    required: true,
  },
  idealTrip: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   motorbikeLicense: {
//     type: String,
//     required: true,
//   },
//   motorbikeModel: {
//     type: String,
//     required: true,
//   },
//   equipment: {
//     type: String,
//     required: true,
//   },
//   riderExperience: {
//     type: String,
//     required: true,
//   },
//   expectedExperience: {
//     type: String,
//     required: true,
//   },
//   excites: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
