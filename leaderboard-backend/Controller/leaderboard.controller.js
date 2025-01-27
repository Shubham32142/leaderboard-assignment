import { User, ClaimHistory } from "../Model/leaderboard.model.js";

export async function getUser(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addUser(req, res) {
  const { name } = req.body;
  try {
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function claimPoints(req, res) {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.totalPoints += points;
    await user.save();
    const claimHistory = new ClaimHistory({ userId, points });
    await claimHistory.save();
    res.json({ message: "Points claimed successfully.", points });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getLeaderboard(req, res) {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function claimHistory(req, res) {
  try {
    const history = await ClaimHistory.find().populate("userId", "name");
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
