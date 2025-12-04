const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

// Public: list & view
router.get("/", getProjects);
router.get("/:id", getProjectById);

// Protected: create/update/delete (admin). Use upload.single('profileImage') to attach image
router.post("/", auth, upload.single("profileImage"), createProject);
router.put("/:id", auth, upload.single("profileImage"), updateProject);
router.delete("/:id", auth, deleteProject);

module.exports = router;
