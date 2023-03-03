const asyncHandler = require("express-async-handler");
const SECTIONMODAL = require("../modals/sectionmodal");
const TASKMODAL = require("../modals/taskmodal");
const PROJECTMODAL = require("../modals/projectmodal");

// @desc create new section
// @route POST /api/section/create-new
// @access Private
const createNewSection = asyncHandler(async (req, res) => {
  const projectId = req.body.project_id;
  const projectName = req.body.section_name;

  if (!projectName || !projectId) {
    throw new Error("Please provide required fields");
  }

  try {
    await PROJECTMODAL.exists({ _id: projectId });
  } catch (err) {
    throw new Error("Project doesnt exist");
  }

  const createdSection = await SECTIONMODAL.create({
    status: "success",
    user: req.user.id,
    section_name: projectName,
    project_id: projectId,
  });

  res.status(200).json(createdSection);
});

// @desc get all sections
// @route GET /api/section/:projectid
// @access Private
const getAllSections = asyncHandler(async (req, res) => {
  const projectId = req.params.projectid;

  if (!projectId) {
    throw new Error("please provide data");
  }

  try {
    await PROJECTMODAL.exists({ _id: projectId });
  } catch (err) {
    throw new Error("Project doesnt exist");
  }

  const queryedSections = await SECTIONMODAL.find({ project_id: projectId });

  const queryedTasks = await TASKMODAL.find({ project: projectId });

  // create DS that combines task with section
  const allSections = queryedSections.map((eachSection) => {
    const assosciatedTasks = queryedTasks.filter(
      (eachTask) => eachTask.status === eachSection.section_name
    );

    return {
      id: eachSection._id,
      section_name: eachSection.section_name,
      tasks: assosciatedTasks,
    };
  });

  res.status(200).json(allSections);
});

module.exports = {
  createNewSection,
  getAllSections,
};
