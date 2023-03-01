const asyncHandler = require("express-async-handler");
const SECTIONMODAL = require("../modals/sectionmodal");
const TASKMODAL = require("../modals/taskmodal");

// @desc create new section
// @route POST /api/section/create-new
// @access Private
const createNewSection = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    throw new Error("Please provide section name");
  }

  const createdSection = await SECTIONMODAL.create({
    user: req.user.id,
    section_name: req.body.name,
  });

  res.status(200).json(createdSection);
});

// @desc get all sections
// @route GET /api/section/
// @access Private
const getAllSections = asyncHandler(async (req, res) => {
  const queryedSections = await SECTIONMODAL.find({ user: req.user.id });
  const queryedTasks = await TASKMODAL.find({ user: req.user.id });

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
