const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({ 
    fName:{
        type    : String,
        require : true,
        trim    : true,
        text    : true,
    },

    lName:{
        type    : String,
        require : true,
        trim    : true,
        text    : true,
    },

    username:{
        type    : String,
        trim    : true,
        text    : true,
        unique: true,
        require: true
    },

    email:{
        type    : String,
        require : true,
        trim    : true,
    },

    password:{
        type    : String,
        require : true,
    },

    date:{
        type    : Date,
        require : true,
    },

    gender:{
        type    : String,
        require : true,
    },

    verified:{
        type    : Boolean,
        default : false
    }
 })

 module.exports = mongoose.model('usermodel',UserModel)