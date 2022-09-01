require('dotenv').config();
const mongoose = require('mongoose')

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,()=>{
        console.log("database connected");
    });
}
