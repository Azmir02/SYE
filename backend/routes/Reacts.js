const express = require("express");
const { reactPost, getreactPost } = require("../controller/Reacts");
const { authUser } = require("../middleware/Authentication");
const reactRouter = express.Router();

reactRouter.route("/reactPost").put(authUser, reactPost);
reactRouter.route("/getreactPost/:id").get(authUser, getreactPost);

module.exports = reactRouter;
