const express = require("express");
const {
  newuser,
  emailVarified,
  loginUser,
  reauthorization,
  resetpass,
  resetcode,
  verifyresetcode,
  changepassword,
  getuser,
} = require("../controller/Usercontroller");
const { authUser } = require("../middleware/Authentication");
const userRouter = express.Router();

userRouter.route("/signup").post(newuser);
userRouter.route("/activate").post(authUser, emailVarified);
userRouter.route("/login").post(loginUser);
userRouter.route("/reauthorization").post(authUser, reauthorization);
userRouter.route("/resetpass").post(resetpass);
userRouter.route("/resetcode").post(resetcode);
userRouter.route("/verifyresetcode").post(verifyresetcode);
userRouter.route("/changepassword").post(changepassword);
userRouter.route("/getuser/:username").get(authUser, getuser);

module.exports = userRouter;
