const mongoose = require("mongoose");
const terminalColor = require('ansi-colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.ATLAS_URI)
        console.log(terminalColor.magenta.bold.underline(`MongoDB connected:  ${conn.connection.host}`))
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = {
    connectDB
}