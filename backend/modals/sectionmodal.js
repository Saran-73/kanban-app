const mongoose = require("mongoose")

const sectionSchema = mongoose.Schema({
    section_name: {
        type: String,
        default: "TO-DO",
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Section", sectionSchema)