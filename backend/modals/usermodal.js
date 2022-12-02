const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    organisation: {
      type: String, 
      required: [true, "Please provide organisation name"]
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
