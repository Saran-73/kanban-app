const express = require("express");
const { getTasks, createTask } = require("../handler/taskhandler");
// const { getTasks, createTask, updateTask, deleteTask } = require("../handler/taskhandler");

const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.route("/").get(protect, getTasks).post(protect, createTask);
// router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
