const asyncHandler = require("express-async-handler");
const TASKMODAL = require("../modals/taskmodal");
const SECTIONMODAL = require("../modals/sectionmodal");

// @desc get all the tasks in a
// @route GET /api/tasks
// @access Private
// const getAllTasksInSection = asyncHandler(async (req, res) => {
//   const TASKS = await TASKMODAL.find({ user: req.user.id });
//   res.status(200).json(TASKS);
// });

// @desc create new task
// @route GET /api/section/task/create-task/:sectionid
// @access Private
const createNewTask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    throw new Error("Please provide title");
  }

  const tasks = await TASKMODAL.create({
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
    section: req.params.sectionid,
  });

  const taskId = tasks.id;

  const updateSection = await SECTIONMODAL.findByIdAndUpdate(
    req.params.sectionid,
    { $push: { tasks: taskId } },
    { upsert: true, new: true }
  );

  res.status(200).json({
    status: "success - new task created",
    new_task_title: tasks.title,
    taskId: tasks.id,
  });
});

module.exports = {
  // getAllTasksInSection,
  createNewTask,
};
