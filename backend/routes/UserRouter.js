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
  getprofilepicture,
  getcoverpicture,
  updatedetails,
  addfriend,
  cancelrequest,
  follow,
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
userRouter.route("/getprofilepicture").put(authUser, getprofilepicture);
userRouter.route("/getcoverpicture").put(authUser, getcoverpicture);
userRouter.route("/updatedetails").put(authUser, updatedetails);
userRouter.route("/addfriend/:id").put(authUser, addfriend);
userRouter.route("/cancelrequest/:id").put(authUser, cancelrequest);
userRouter.route("/follow/:id").put(authUser, follow);

module.exports = userRouter;
