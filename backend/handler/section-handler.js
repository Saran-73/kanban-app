const asyncHandler = require("express-async-handler");
const SECTIONMODAL = require("../modals/sectionmodal");
// const TASKMODAL = require("../modals/taskmodal");

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

  //   const tasks = await TASKMODAL.create({
  //     user: req.user.id,
  //     title: req.body.title,
  //     description: req.body.description,
  //     section: createdSection.id,
  //   });

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

  res.status(200).json(createdSection);
});

// @desc get all sections
// @route GET /api/section/
// @access Private
const getAllSections = asyncHandler(async (req, res) => {
  const allSections = await SECTIONMODAL.find({ user: req.user.id });
  res.status(200).json(allSections);
});

module.exports = {
  createNewSection,
  getAllSections,
};
