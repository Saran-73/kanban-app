const express = require('express');
const { registerUser, loginUser, getUserData } = require('../handler/userhandler');
const protect = require('../middleware/authmiddleware');
const router = express.Router();


router.post("/" ,registerUser)
router.post("/login" , loginUser)
router.get("/:username", protect , getUserData)

module.exports = router;