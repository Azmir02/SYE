const Post = require("../models/Post");
const User = require("../models/UserModel");

exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save();
    await post.populate("user", "fName lName cover profilePicture username");
    res.json(post);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

// for get post and also get following post users are following
exports.getPost = async (req, res) => {
  try {
    const followingTemp = await User.findById(req.user.id).select("following");
    const following = followingTemp.following;
    const promises = following.map((user) => {
      return Post.find({ user: user })
        .populate("user", "profilePicture cover fName lName username")
        .populate(
          "comments.comentedBy",
          "profilePicture cover fName lName username"
        )
        .sort({ createdAt: -1 });
    });
    const followingPosts = await (await Promise.all(promises)).flat();
    const userPost = await Post.find({ user: req.user.id }).populate(
      "user",
      "profilePicture cover fName lName username"
    ).populate(
      "comments.comentedBy",
      "profilePicture cover fName lName username"
    )
    followingPosts.push(...[...userPost]);
    followingPosts.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    res.json(followingPosts);
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
            commentedAt: new Date(),
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

exports.savepost = async (req, res) => {
  try {
    const postId = req.params.id;
    const user = await User.findById(req.user.id);
    const check = user?.savedpost.find((a) => a.post.toString() == postId);
    if (check) {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: {
          savedpost: {
            _id: check._id,
          },
        },
      });
    } else {
      await User.findByIdAndUpdate(req.user.id, {
        $push: {
          savedpost: {
            post: postId,
            savedAt: new Date(),
          },
        },
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.removepost = async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    res.json({ status: "done" });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
