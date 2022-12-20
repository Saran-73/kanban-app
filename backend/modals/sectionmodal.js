const mongoose = require("mongoose")

const sectionSchema = mongoose.Schema({
    section_name: String
}, {
    timestamps: true,
})

module.exports = mongoose.model("section", sectionSchema)