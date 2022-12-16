const mongoose = require("mongoose");


const task = mongoose.Schema({ title: String, description: String })
const section = mongoose.Schema({ section_name: { type: String, }, all_tasks: [task] })


const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    all_sections: [section]
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Task", taskSchema);
