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

  const tasks = await TASKMODAL.create(
    {
      user: req.user.id,
      title: req.body.title,
      description: req.body.description,
      status: req.body.section_name,
    },
    function (err) {
      if (err) {
        throw new Error("err while creating task");
      }
    }
  );

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

  // get that task and change its status
  const task = await TASKMODAL.findByIdAndUpdate(taskId, {
    status: associatedSection,
  });

  res.status(200).json({
    ...task,
  });
});

module.exports = {
  createNewTask,
  updateTask,
};
