const jwt = require("jsonwebtoken");

exports.jwtToken = (user, expierdIn) => {
  return jwt.sign(user, process.env.SECRET_TOKEN, { expiresIn: expierdIn });
};
