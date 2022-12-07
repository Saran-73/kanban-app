const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asynchandler = require("express-async-handler");
const User = require("../modals/usermodal");
// const registerOrganisation = require('./organisation_handler.js')
const ORGANISATION_MODAL = require("../modals/organisation_modal.js");


// @desc register the user
// @route POST /api/user
// @access Public
const registerUser = asynchandler(async (req, res) => {
  // get the user input from the body
  const { name, email, password, organisation } = req.body;

  // if any one of them is not present mean throw err
  if (!email || !name || !password || !organisation) {
    res.status(400);
    throw new Error("Please provide all fields");
  }

  // look for the presence of same data in the database
  // if present throw err-  user already present
  const userdata = await User.findOne({ email });
  if (userdata) {
    res.status(400);
    throw new Error("User already exists");
  }

  // encrypt password by hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //  create new document in the db using User modal
  const createdUser = await User.create({
    name,
    email,
    organisation,
    password: hashedPassword,
  });


  const registerOrganisation = async () => {
    const resultFromDb = await ORGANISATION_MODAL.create({
      organisation : createdUser.organisation,
    })
    return resultFromDb;
  }
  
  if (createdUser) {
    
  const oneOrganisation = await registerOrganisation()

  // send the success response with created user data
    res.status(201).json({
      _id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      organisation: createdUser.organisation,
      token: generateJwt(createdUser.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc login the user
// @route POST /api/user/login
// @access Public
const loginUser = asynchandler(async (req, res) => {
  // get the user input
  const { email, password } = req.body;

  // validate the input
  if (!email || !password) {
    res.status(400);
    throw new Error("Enter credentials");
  }
  // check for the presence of user in db
  const userInDb = await User.findOne({ email });

  // validate the name and password comparing i/p from user with db result
  if (userInDb && (await bcrypt.compare(password, userInDb.password))) {
    res.status(201).json({
      _id: userInDb.id,
      name: userInDb.name,
      email: userInDb.email,
      token: generateJwt(userInDb.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc get the user 
// @route GET /api/user/:name
// @access Private
const getUserData = asynchandler(async (req, res) => {
  const { name, _id, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// generate JWT
const generateJwt = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "2d" });

module.exports = {
  registerUser,
  loginUser,
  getUserData,
};
