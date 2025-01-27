import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalPoints: { type: Number, default: 0 },
});

const claimHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  points: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);
export const ClaimHistory = mongoose.model("ClaimHistory", claimHistorySchema);
