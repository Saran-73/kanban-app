const express = require("express");
const {
  getAllTasksInSection,
  createNewTask,
} = require("../handler/taskhandler");
const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.route("/").get(protect, getAllTasksInSection);
router.route("/create-task/:id").post(protect, createNewTask);

module.exports = router;
