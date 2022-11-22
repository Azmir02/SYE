const { default: mongoose } = require("mongoose");
const Reacts = require("../models/Reacts");

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
      if (check.react == react) {
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
      console.log(group);
    }, {});
    res.json({
      reactsArray,
      check: check?.react,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
