const asyncHandler = require("express-async-handler");
const  mongoose  = require("mongoose");
const { findByIdAndUpdate, findById } = require("../modals/taskmodal");

const TASKMODAL = require("../modals/taskmodal");

// const PARENT_TASK_MODAL = mongoose.model("Task");

const parent_tasks = new TASKMODAL();


// const User = require("../modals/usermodal");

// @desc get the tasks
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const TASKS = await TASKMODAL.find({ user: req.user.id });
  res.status(200).json(TASKS);
});


// @desc create the tasks
// @route POST /api/tasks/
// @access Private
const createTasks = asyncHandler(async (req, res) => {

  // create the data in database with the data recieved from body
  const TASKS = await TASKMODAL.create({
    all_sections: [{ section_name: "to-do", all_tasks: []}],
    user: req.user.id,
  });

 
  // send the response back
  res.status(200).json(TASKS);
});


// @desc create one section 
// @route POST /api/tasks/create-section/:taskid
// @access Private
// const createSection = asyncHandler(async (req, res) => {

  // const sectionName = req.body.section_name;
  // const taskId = req.params.taskid

  // if (!sectionName) {
  //   throw new Error("Please provide task name")
  // }

  // // when no id is provided handle err
  // // if (!taskId) {
  // //   throw new Error("Please provide task Id")
  // // }

  // const newSection = { section_name: sectionName, all_tasks: [] };

  // const taskInDb = await TASKMODAL.findById(taskId);
  
  // taskInDb.all_sections = [...taskInDb.all_sections, newSection];

  // const updatedResult = await taskInDb.save()

  // res.status(200).json(updatedResult)

// })

// @desc create one section 
// @route POST /api/tasks/create-task
// @access Private
const createSection = asyncHandler(async (req, res) => {
  
  parent_tasks.user = req.user.id
  parent_tasks.all_sections.push({ section_name: req.body.section_name, all_tasks: []})

   parent_tasks.save(function (err) {
    if (err) {
      throw new Error("err while saving")
    } 

    res.status(200).json({section_update: "Success"});
  })

})



module.exports = { getTasks ,createTasks, createSection}