const mongoose = require("mongoose");


const task = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
})

const section = mongoose.Schema({
  section_name: {
    type: String,
    default: ""
  },
  all_tasks: {
    type: [task],
    default: () => [{ title: "", description: ""}]
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
      default: () => [{ section_name: "", all_tasks: []}]
    }
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Task", taskSchema);
