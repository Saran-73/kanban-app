const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section"
    },
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Task", taskSchema);
