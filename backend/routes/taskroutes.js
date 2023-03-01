const express = require("express");
const { createNewTask, updateTask } = require("../handler/taskhandler");
const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.route("/create-task").post(protect, createNewTask);
router.route("/update-task/:taskid").patch(protect, updateTask);

module.exports = router;
