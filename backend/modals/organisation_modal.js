const mongoose = require("mongoose")

const organisationsSchema = mongoose.Schema({
    organisation: {
        type: String,
        required: [true, "Please provide organisation name"]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("organisations", organisationsSchema)