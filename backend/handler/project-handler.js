const asyncHandler = require("express-async-handler");
const PROJECTMODAL = require("../modals/projectmodal");

// Project === Board

const createProject = asyncHandler(async (req, res) => {
  // user should be able to create more than one board or project
  // on create api create a project for the user

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
