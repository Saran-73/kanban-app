const asyncHandler = require("express-async-handler");

const Task = require("../modals/taskmodal");
const User = require("../modals/usermodal");

// @desc get the tasks
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const GOAL = await Task.find({ user: req.user.id });
  res.status(200).json(GOAL);
});

// @desc create the tasks
// @route POST /api/tasks
// @access Private
const createTask = asyncHandler(async (req, res) => {
  if (!req.body.taskname) {
    res.status(400);
    // will cause the default err handling behaviour of express
    throw new Error("Provide task name");
  }
  // create the data in database with the data recieved from body
  const GOAL = await Task.create({
    taskname: req.body.taskname,
    user: req.user.id,
  });
  // send the response back
  res.status(200).json(GOAL);
});

// @desc update/edit the tasks
// @route PUT /api/tasks
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  // get the data form db based on id
  const GOAL = await Task.findById(req.params.id);

  if (!GOAL) {
    res.status(400);
    throw new Error("Task not found");
  }

  // check for user in db based on  id from the token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  //check the user logged in matches the task of the user
  if (GOAL.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorised");
  }

  // find data by id and update it with given body
  const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // send response back
  res.status(200).json(updateTask);
});

// @desc delete the tasks
// @route DELETE /api/tasks
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  const taskById = await Task.findById(req.params.id);

  if (!taskById) {
    res.status(400);
    throw new Error("Task not found");
  }
  // check for user in db based on  id from the token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  //check the user logged in matches the task of the user
  if (taskById.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorised");
  }

  if (taskById.user.toString() === user.id) {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
  }
});

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
