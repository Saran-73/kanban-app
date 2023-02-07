const express = require("express");
const {
  getAllSections,
  createNewSection,
} = require("../handler/section-handler");
const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.route("/").get(protect, getAllSections);
router.route("/create-new").post(protect, createNewSection);

module.exports = router;
