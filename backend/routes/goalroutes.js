const express = require("express");
const { getGoals, createGoal, updateGoal, deleteGoal } = require("../handler/goalhandler");
const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.route("/").get(protect, getGoals).post(protect, createGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
