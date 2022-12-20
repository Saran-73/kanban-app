const express = require("express");
const { getTasks, updateTasks, createTasks } = require("../handler/taskhandler");
// const { getTasks, createTask, updateTask, deleteTask } = require("../handler/taskhandler");

const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.route("/").get(protect, getTasks);
router.route("/:tasksId").put(protect, updateTasks).post(protect, createTasks);

// router.route("/create-section/:taskid").post(protect, createSection);
// router.route("/create-task").post(protect, createSection)
// router.route("/create-task/:sectionid").post(protect, createTaskInSection )
// router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
