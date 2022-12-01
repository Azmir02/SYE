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
  unfollow,
  acceprequest,
  unfriend,
  deleterequest,
  search,
  addsearchhistory,
  getsearchhistory,
  removesearchhistory,
  getfriendsinfopage,
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
userRouter.route("/unfollow/:id").put(authUser, unfollow);
userRouter.route("/acceprequest/:id").put(authUser, acceprequest);
userRouter.route("/unfriend/:id").put(authUser, unfriend);
userRouter.route("/deleterequest/:id").put(authUser, deleterequest);
userRouter.route("/search/:searchTerm").post(authUser, search);
userRouter.route("/addsearchhistory").put(authUser, addsearchhistory);
userRouter.route("/getsearchhistory").get(authUser, getsearchhistory);
userRouter.route("/removesearchhistory").put(authUser, removesearchhistory);
userRouter.route("/getfriendsinfopage").get(authUser, getfriendsinfopage);

module.exports = userRouter;
