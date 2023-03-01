const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    section_name: {
      type: String,
      required: true,
      default: "TO-DO",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Section", sectionSchema);
