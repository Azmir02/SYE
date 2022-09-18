const express = require("express")
const { newuser , emailVarified, loginUser,auth } = require('../controller/Usercontroller');   
const { authUser } = require("../middleware/Authentication");
const userRouter = express.Router()

userRouter.route('/signup').post(newuser);
userRouter.route('/activate').post(authUser,emailVarified);
userRouter.route('/login').post(loginUser);
userRouter.route('/auth').post(authUser,auth);

module.exports = userRouter