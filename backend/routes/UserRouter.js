const express = require("express")
const { newuser , emailVarified, loginUser } = require('../controller/Usercontroller')   
const userRouter = express.Router()

userRouter.route('/signup').post(newuser);
userRouter.route('/activate').post(emailVarified);
userRouter.route('/login').post(loginUser);

module.exports = userRouter