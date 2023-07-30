const express = require("express");
const { connect } = require("./database/dbConfig");
const userRouter = require("./routes/UserRouter");
const postRouter = require("./routes/Postrouter");
const uploadRouter = require("./routes/UploadRouter");
const reactRouter = require("./routes/Reacts");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// Database-connection
connect();

// middleware
const app = express();
app.use(express.json());

// for file upload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//all-work
app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", uploadRouter);
app.use("/api", reactRouter);

const Port = process.env.PORT || 8000;
app.listen(Port);
