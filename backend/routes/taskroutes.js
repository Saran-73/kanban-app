const express = require("express");
const { getTasks, createTask, createSection, getTasksForOneSection, createNewTask } = require("../handler/taskhandler");
// const { getTasks, createTask, updateTask, deleteTask } = require("../handler/taskhandler");

const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.route("/").get(protect, getTasks);
    // .post(protect, createTask);
router.route("/create-task/:id").post(protect, createNewTask);

// router.route("/:tasksId").put(protect, updateTasks).post(protect, createTasks);

router.route("/create-section").post(protect, createSection);
router.route('/get-sections-tasks/:id').get(protect, getTasksForOneSection);


module.exports = router;
