const express = require("express");
const { uploadImage } = require("../controller/Uploadcontroller");
const imageValidation = require("../middleware/UploadImagevalidation");
const uploadRouter = express.Router();

uploadRouter.route("/uploadimage").post(imageValidation, uploadImage);

module.exports = uploadRouter;
