const asyncHandler = require("express-async-handler");
const PROJECTMODAL = require("../modals/projectmodal");

// @desc create new project or board
// @route POST /api/project/create
// @access Private
const createProject = asyncHandler(async (req, res) => {
  const projectName = req.body.project_name;
  if (projectName === "") {
    throw new Error("provide project name");
  }

  let response;
  try {
    response = await PROJECTMODAL.create({
      user: req.user.id,
      project_name: projectName,
    });
  } catch (err) {
    throw new Error("err while creating project");
  }

  res.status(200).json({
    status: "new project succesfully created",
    projectId: response.id,
  });
});

module.exports = {
  createProject,
};
