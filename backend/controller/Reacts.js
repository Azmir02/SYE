const { default: mongoose } = require("mongoose");
const Reacts = require("../models/Reacts");
const User = require("../models/UserModel");

exports.reactPost = async (req, res) => {
  try {
    const { postId, react } = req.body;
    const check = await Reacts.findOne({
      postRef: postId,
      reactBy: mongoose.Types.ObjectId(req.user.id),
    });
    if (check == null) {
      const newReact = new Reacts({
        react: react,
        postRef: postId,
        reactBy: req.user.id,
      });
      await newReact.save();
    } else {
      if (check.react === react) {
        await Reacts.findByIdAndRemove(check._id);
      } else {
        await Reacts.findByIdAndUpdate(check._id, {
          react: react,
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

exports.getreactPost = async (req, res) => {
  try {
    const reactsArray = await Reacts.find({ postRef: req.params.id });
    // if already react exits
    let check = await Reacts.findOne({
      postRef: req.params.id,
      reactBy: req.user.id,
    });

    let newReacts = reactsArray.reduce((group, react) => {
      let key = react["react"];
      group[key] = group[key] || [];
      group[key].push(react);
      return group;
    }, {});
    const reacts = [
      {
        react: "like",
        count: newReacts.like ? newReacts.like.length : 0,
      },
      {
        react: "love",
        count: newReacts.love ? newReacts.love.length : 0,
      },
      {
        react: "angry",
        count: newReacts.angry ? newReacts.angry.length : 0,
      },
      {
        react: "haha",
        count: newReacts.haha ? newReacts.haha.length : 0,
      },
      {
        react: "sad",
        count: newReacts.sad ? newReacts.sad.length : 0,
      },
      {
        react: "wow",
        count: newReacts.wow ? newReacts.wow.length : 0,
      },
    ];

    // check If post is already saved or not
    const user = await User.findById(req.user.id);
    const isPostSave = user?.savedpost.find(
      (x) => x.post.toString() == req.params.id
    );

    res.json({
      reacts,
      check: check?.react,
      total: reactsArray.length,
      isPostSave: isPostSave ? true : false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
