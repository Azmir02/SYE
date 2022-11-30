const express = require("express");
const {
  createPost,
  getPost,
  comment,
  savepost,
  removepost,
} = require("../controller/Postcontroller");
const { authUser } = require("../middleware/Authentication");
const postRouter = express.Router();

postRouter.route("/createPost").post(authUser, createPost);
postRouter.route("/getPost").get(authUser, getPost);
postRouter.route("/comment").put(authUser, comment);
postRouter.route("/savepost/:id").put(authUser, savepost);
postRouter.route("/removepost/:id").delete(authUser, removepost);

module.exports = postRouter;
