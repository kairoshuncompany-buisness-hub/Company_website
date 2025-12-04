const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/adminController");

// POST /api/admin/register
router.post("/register", register);

// POST /api/admin/login
router.post("/login", login);

module.exports = router;
