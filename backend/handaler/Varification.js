const User = require('../models/UserModel')

exports.varifyEmail = (email)=>{
    return String(email).toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

exports.validateLength = (text,min,max) =>{
    if(text.length < min && text.length > max) {
        return false;
    }else{
        return true;
    }
}

exports.validateUsername = async (username)=>{
    let isTrue = false

    do{
        let user = await User.findOne({ username })
        // check existing_Users in DB
        if(user) {
            username += (+new Date() * Math.random()).toString().substring(0,1)
            isTrue = true
        }else{
            isTrue = false
        }
    }
    while(isTrue)

    return username
}