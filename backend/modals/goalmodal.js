const mongoose = require("mongoose");
const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    goalname: {
      type: String,
      required: [true, "please add goalname"],
    },
  },
  {
    // will record created and updated at time
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
