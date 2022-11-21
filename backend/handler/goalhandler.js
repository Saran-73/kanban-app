const asyncHandler = require("express-async-handler");

const Goal = require("../modals/goalmodal");
const User = require("../modals/usermodal");

// @desc get the goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const GOAL = await Goal.find({ user: req.user.id });
  res.status(200).json(GOAL);
});

// @desc create the goals
// @route POST /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.goalname) {
    res.status(400);
    // will cause the default err handling behaviour of express
    throw new Error("Provide goal name");
  }
  // create the data in database with the data recieved from body
  const GOAL = await Goal.create({
    goalname: req.body.goalname,
    user: req.user.id,
  });
  // send the response back
  res.status(200).json(GOAL);
});

// @desc update/edit the goals
// @route PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  // get the data form db based on id
  const GOAL = await Goal.findById(req.params.id);

  if (!GOAL) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // check for user in db based on  id from the token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  //check the user logged in matches the goal of the user
  if (GOAL.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorised");
  }

  // find data by id and update it with given body
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // send response back
  res.status(200).json(updateGoal);
});

// @desc delete the goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goalById = await Goal.findById(req.params.id);

  if (!goalById) {
    res.status(400);
    throw new Error("Goal not found");
  }
  // check for user in db based on  id from the token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  //check the user logged in matches the goal of the user
  if (goalById.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorised");
  }

  if (goalById.user.toString() === user.id) {
    await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
  }
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
