const express = require("express");
const { createPost } = require("../controller/Postcontroller");
const { authUser } = require("../middleware/Authentication");
const postRouter = express.Router();

postRouter.route("/createPost").post(authUser, createPost);

module.exports = postRouter;
