const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const Resetcode = new mongoose.Schema({
  code: {
    type: String,
    require: true,
  },
  user: {
    type: ObjectId,
    ref: "usermodel",
    required: true,
  },
});

module.exports = mongoose.model("Code", Resetcode);
