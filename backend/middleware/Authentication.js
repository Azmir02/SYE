const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
  try {
    let temporary = req.header("Authorization");
    const token = temporary ? temporary.slice(7, temporary.length) : "";
    if (!token) {
      return res.status(404).json({
        messasge: "Invalid Authentication",
      });
    }
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      if (err) {
        return res.status(404).json({
          messasge: "Invalid Authorization",
        });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(404).json({
      messasge: err.messasge,
    });
  }
};
