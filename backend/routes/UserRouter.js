const express = require("express")
const { newuser , emailVarified, loginUser,reauthorization } = require('../controller/Usercontroller');   
const { authUser } = require("../middleware/Authentication");
const userRouter = express.Router()

userRouter.route('/signup').post(newuser);
userRouter.route('/activate').post(authUser,emailVarified);
userRouter.route('/login').post(loginUser);
userRouter.route('/reauthorization').post(authUser,reauthorization);

module.exports = userRouter