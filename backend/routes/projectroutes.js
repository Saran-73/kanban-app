const express = require("express");
const { createProject } = require("../handler/project-handler");
const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.route("/create").post(protect, createProject);

module.exports = router;
