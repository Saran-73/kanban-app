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

  const createdSection = await SECTIONMODAL.create({
    section_name: req.body.section_name
  })

  const tasks = await TASKMODAL.create({
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
    section: createdSection.id,
  });

  // ---- important concept but not needed here ---
  // const populatedDataByReferringModals = await TASKMODAL.findOne({ title: tasks.title }).populate({
  //   path: 'section',
  //   select: 'section_name',
  // }).exec(function (err, story) {
  //   if (err) {
  //     console.log(err)
  //     throw new Error("err occured")
  //   }
  //   res.status(200).json(populatedDataByReferringModals);
  // });
s
    res.status(200).json(tasks);

});



const createSection = asyncHandler(async (req, res) => {

  const createdSection = await SECTIONMODAL.create({
    section_name: req.body.section_name
  })

  res.status(200).json({
    section_created_status: "success",
    section_id: createdSection.id
  })
  
})


const getTasksForOneSection = asyncHandler(async (req, res) => {

  const tasksOfSingleSection = await TASKMODAL.find({ section: req.params.id });

  res.status(200).json(tasksOfSingleSection)
})

const createNewTask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    throw new Error("Please provide title")
  }

  const tasks = await TASKMODAL.create({
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
    section: req.params.id,
  });

  res.status(200).json({status: "success - new task created", new_task_title: tasks.title})
})

module.exports = { getTasks ,createTask, createSection, getTasksForOneSection, createNewTask}