const express = require("express");
const { connectDB } = require("./db/config");
const { errorHandler } = require("./middleware/errormiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

const app = express();

// establist connection to database
connectDB();
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", require("./routes/taskroutes"));
app.use("/api/user", require("./routes/userroutes"));


// override the default Express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on ${port}`));
