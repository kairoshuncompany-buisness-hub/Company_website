const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  category: {
    type: String,
    enum: ["app", "website", "software", "other"],
    default: "other",
    required: true
  },
  profileImage: { type: String }, // path to uploaded image (e.g., /uploads/xyz.jpg)
  problemStatement: { type: String },
  solution: { type: String },
  technologies: { type: [String], default: [] }, // e.g., ["React", "Firebase", "Node"]
  liveLink: { type: String }, // optional
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", projectSchema);
