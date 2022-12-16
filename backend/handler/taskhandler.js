const asyncHandler = require("express-async-handler");

const TASKMODAL = require("../modals/taskmodal");
// const User = require("../modals/usermodal");

// @desc get the tasks
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const TASKS = await TASKMODAL.find({ user: req.user.id });
  res.status(200).json(TASKS);
});


// @desc create the tasks
// @route POST /api/tasks
// @access Private
const createTask = asyncHandler(async (req, res) => {

  // create the data in database with the data recieved from body
  const TASKS = await TASKMODAL.create({
    all_sections: [{ section_name: "to-do", all_tasks: [] }, { section_name: "progress", all_tasks: [{ title: "task name", description: "my first task" }] }],
    user: req.user.id,
  });

 
  // send the response back
  res.status(200).json(TASKS);
});



module.exports = { getTasks ,createTask}