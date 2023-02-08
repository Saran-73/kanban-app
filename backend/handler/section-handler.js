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
  const allSections = await SECTIONMODAL.find({ user: req.user.id }).populate(
    "tasks"
  );
  res.status(200).json(allSections);
});

// @desc update section data when drap & drop is done
// @route PATCH /api/section/update
// @access Private
const updateSectionData = asyncHandler(async (req, res) => {
  const taskId = req.body.taskid;
  const sourceSectionId = req.body.sourceid;
  const destinationSectionId = req.body.destinationid;

  // get the source section and remove the id
  const sourceSection = await SECTIONMODAL.updateOne(
    { id: sourceSectionId },
    {
      $pull: {
        tasks: taskId,
      },
    }
  );

  // get that task and change its section id ref
  const task = await TASKMODAL.findByIdAndUpdate(taskId, {
    section: destinationSectionId,
  });

  // get the destination section and push the id
  const destinationSection = await SECTIONMODAL.findByIdAndUpdate(
    destinationSectionId,
    { $push: { tasks: taskId } },
    { upsert: true, new: true }
  );

  res.status(200).json({
    status: "succes",
  });
});

module.exports = {
  createNewSection,
  getAllSections,
  updateSectionData,
};
