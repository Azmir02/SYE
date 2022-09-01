const jwt = require('jsonwebtoken');

exports.jwtToken = (user,expierdIn) =>(
    jwt.sign(user,process.env.SECRET_TOKEN, { expiresIn : expierdIn})
);