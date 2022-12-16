const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    taskname: {
      type: String,
      required: [true, "please add taskname"],
    },
  },
  {
    // will record created and updated at time
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
