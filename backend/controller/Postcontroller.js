const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save();
    res.json(post);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const findAllPost = await Post.find().populate(
      "user",
      "fName lName username profilePicture gender"
    );
    res.json(findAllPost);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
