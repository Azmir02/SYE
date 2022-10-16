const express = require("express");
const { uploadImage } = require("../controller/Uploadcontroller");
const { authUser } = require("../middleware/Authentication");
const UploadImagevalidation = require("../middleware/UploadImagevalidation");
const uploadRouter = express.Router();

uploadRouter
  .route("/uploadimage")
  .post(authUser, UploadImagevalidation, uploadImage);

module.exports = uploadRouter;
