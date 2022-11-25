const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const Reacts = new mongoose.Schema({
  react: {
    type: String,
    enum: ["like", "love", "haha", "angry", "wow", "sad"],
    require: true,
  },
  postRef: {
    type: ObjectId,
    ref: "posts",
  },
  reactBy: {
    type: ObjectId,
    ref: "usermodel",
  },
});

module.exports = mongoose.model("React", Reacts);
