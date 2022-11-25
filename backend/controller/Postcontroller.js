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
    const findAllPost = await Post.find()
      .populate("user", "fName lName username profilePicture cover gender")
      .sort({ createdAt: -1 });
    res.json(findAllPost);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.comment = async (req, res) => {
  try {
    const { comment, image, postId } = req.body;
    const newComment = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          comments: {
            comment: comment,
            image: image,
            comentedBy: req.user.id,
          },
        },
      },
      {
        new: true,
      }
    ).populate("comments.comentedBy", "profilePicture username fName lName");
    res.json(newComment.comments);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
