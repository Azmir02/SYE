const express = require("express");
const {
  createPost,
  getPost,
  comment,
} = require("../controller/Postcontroller");
const { authUser } = require("../middleware/Authentication");
const postRouter = express.Router();

postRouter.route("/createPost").post(authUser, createPost);
postRouter.route("/getPost").get(authUser, getPost);
postRouter.route("/comment").put(authUser, comment);

module.exports = postRouter;
