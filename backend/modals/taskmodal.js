const mongoose = require("mongoose");


const task = mongoose.Schema({
  title: String,
  description: String
})

const section = mongoose.Schema({
  section_name: {
    type: String,
    // default: "i M DEFAYLT"
  },
  all_tasks: {
    type: [task],
    default: () => []
  }
})

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    all_sections: {
      type: [section],
      default: () => []
    }
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Task", taskSchema);
