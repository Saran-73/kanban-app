const asyncHandler = require("express-async-handler");
const TASKMODAL = require("../modals/taskmodal");
const SECTIONMODAL = require("../modals/sectionmodal");

// @desc create new task
// @route POST /api/section/task/create-task
// @access Private
const createNewTask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    throw new Error("Please provide title");
  }

  const queryedSection = await SECTIONMODAL.exists({
    section_name: req.body.section_name,
  });

  if (!queryedSection) {
    throw new Error("seciton not found");
  }

  try {
    const tasks = await TASKMODAL.create({
      user: req.user.id,
      title: req.body.title,
      description: req.body.description,
      status: req.body.section_name,
    });
  } catch (err) {
    throw new Error("err while creating task");
  }

  res.status(200).json({
    created_status: "success",
  });
});

// @desc update task data when drap & drop is done
// @route PATCH /api/section/task/update-task/:taskid
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  const taskId = req.params.taskid;
  const associatedSection = req.body.section_name;

  const queryedSection = await SECTIONMODAL.exists({
    section_name: req.body.section_name,
  });
  // if section didn't exist
  if (!queryedSection) {
    throw new Error("seciton not found");
  }

  // get that task and change its status
  try {
    const task = await TASKMODAL.findByIdAndUpdate(taskId, {
      status: associatedSection,
    });
  } catch (err) {
    throw new Error("err in updating the task check the id");
  }

  res.status(200).json({
    status: "success",
  });
});

module.exports = {
  createNewTask,
  updateTask,
};
