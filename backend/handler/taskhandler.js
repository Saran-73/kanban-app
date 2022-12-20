const asyncHandler = require("express-async-handler");
const TASKMODAL = require("../modals/taskmodal");
const SECTIONMODAL = require("../modals/sectionmodal");

// @desc get the tasks
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const TASKS = await TASKMODAL.find({user: req.user.id});
  res.status(200).json(TASKS);
});

   
// @desc create the tasks
// @route POST /api/tasks/
// @access Private
const createTask = asyncHandler(async (req, res) => {

  if (!req.body.title) {
    throw new Error("Please provide title")
  }

  const TASKS = await TASKMODAL.create({
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
    section: ""
  });

  res.status(200).json(TASKS);
});

module.exports = { getTasks ,createTask}