const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Load env
dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies (for form posts)

// Serve uploads statically so frontend can fetch images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/admin", require("./routes/admin"));
app.use("/api/projects", require("./routes/project"));

app.get("/", (req, res) => res.send("MERN Admin Backend is running"));

// Error handler for multer or other middleware errors (optional)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message || err);
  if (err.code === "LIMIT_FILE_SIZE") return res.status(400).json({ message: "File too large" });
  res.status(500).json({ message: err.message || "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
