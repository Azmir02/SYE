const Users = require("../models/UserModel");
const Post = require("../models/Post");
const {
  varifyEmail,
  validateLength,
  validateUsername,
} = require("../handaler/Varification");
const { sendEmailvarification, sendResetcode } = require("../handaler/Mail");
const { jwtToken } = require("../handaler/Token");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Code = require("../models/Code");
const { generateCode } = require("../handaler/GenerateCode");
const { findOne } = require("../models/Code");
const mongoose = require("mongoose");

exports.newuser = async (req, res) => {
  try {
    const {
      fName,
      lName,
      username,
      email,
      password,
      bMonth,
      bDay,
      bYear,
      gender,
      verified,
    } = req.body;

    if (!varifyEmail(email)) {
      return res.status(400).json({
        message: "Invalid Email Address",
      });
    }

    const chekEmail = await Users.findOne({ email });

    if (chekEmail) {
      return res.status(400).json({
        message: "Email already has been exist",
      });
    }

    if (!validateLength(fName, 3, 15)) {
      return res.status(400).json({
        message: "Firstname should be minimum 3 and max 15 characters",
      });
    }

    if (!validateLength(lName, 3, 15)) {
      return res.status(400).json({
        message: "lastname should be minimum 3 and max 15 characters",
      });
    }

    if (!validateLength(password, 8, 40)) {
      return res.status(400).json({
        message: "Password should be minimum 8 characters",
      });
    }

    // bcrypt-Password
    const encrypt = await bcrypt.hash(password, 10);

    // generate username
    let tempUsername = fName + lName;
    let finalUsername = await validateUsername(tempUsername);

    const User = await new Users({
      fName,
      lName,
      username: finalUsername,
      email,
      password: encrypt,
      bMonth,
      bDay,
      bYear,
      gender,
      verified,
    }).save();

    const emailToken = jwtToken({ id: User._id.toString() }, "1h");

    const url = `${process.env.BASE_URL}/activate/${emailToken}`;

    sendEmailvarification(User.email, User.fName, url);

    const token = jwtToken({ id: User._id.toString() }, "7d");

    res.send({
      id: User._id,
      username: User.username,
      email: User.email,
      fName: User.fName,
      lName: User.lName,
      profilePicture: User.profilePicture,
      cover: User.cover,
      details: User.details.othername,
      verified: User.verified,
      friends: User.friends,
      followers: User.followers,
      token: token,
      message: "Registration success! Please activate your email before",
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.emailVarified = async (req, res) => {
  try {
    const varified = req.user.id;
    const { token } = req.body;
    const user = jwt.verify(token, process.env.SECRET_TOKEN);
    const check = await Users.findById(user.id);

    if (varified !== user.id) {
      return res.status(404).json({
        message: "you don't have authorization to complete this operation",
      });
    }

    if (check.verified === true) {
      return res.status(400).json({
        message: "this email is already verified",
      });
    } else {
      await Users.findByIdAndUpdate(user.id, { verified: true });
      return res.status(200).json({
        message: "account has been activated successfully",
      });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwtToken({ id: user._id.toString() }, "7d");
        res.send({
          id: user._id,
          username: user.username,
          email: user.email,
          fName: user.fName,
          lName: user.lName,
          profilePicture: user.profilePicture,
          cover: user.cover,
          verified: user.verified,
          friends: user.friends,
          followers: user.followers,
          details: user.details.othername,
          token: token,
        });
      } else {
        res.status(404).json({
          message: "Password Incorrrect",
        });
      }
    } else {
      res.status(404).json({
        message: "Invalid Email",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

exports.reauthorization = async (req, res) => {
  try {
    let id = req.user.id;
    const user = await Users.findById(id);
    if (user.verified === true) {
      return res.status(404).json({
        message: "This account is already activated",
      });
    }
    const emailToken = jwtToken({ id: user._id.toString() }, "1h");

    const url = `${process.env.BASE_URL}/activate/${emailToken}`;

    sendEmailvarification(user.email, user.fName, url);
    return res.status(200).json({
      message: "Email varificatin link has been sent to your account",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.resetpass = async (req, res) => {
  try {
    const { email } = req.body;
    const matchEmail = await Users.findOne({ email }).select("-password");
    if (!matchEmail) {
      return res.status(404).json({
        message: "Email dosen't exist",
      });
    }
    res.status(200).json({
      email: matchEmail.email,
      picture: matchEmail.profilePicture,
    });
  } catch (error) {
    res.status(404).json({
      messasge: error.message,
    });
  }
};

exports.resetcode = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ email }).select("-password");
    await Code.findOneAndRemove({ user: user._id });
    const code = generateCode(5);
    const saveCode = await new Code({
      user: user._id,
      code,
    }).save();
    sendResetcode(user.email, user.fName, code);
    return res.status(200).json({
      messasge: "Reset code has been sent to your email",
    });
  } catch (error) {
    res.status(404).json({
      messasge: error.message,
    });
  }
};

exports.verifyresetcode = async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await Users.findOne({ email });
    const dbcode = await Code.findOne({ user: user._id });

    if (dbcode.code !== code) {
      return res.status(404).json({
        message: "Code doesn't matched",
      });
    }
    return res.status(200).json({
      messasge: "Thank you",
    });
  } catch (error) {
    res.status(404).json({
      messasge: error.message,
    });
  }
};

exports.changepassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const cryptedPassword = await bcrypt.hash(password, 10);
    await Users.findOneAndUpdate(
      {
        email,
      },
      {
        password: cryptedPassword,
      }
    );
    return res.status(200).json({
      messasge: "Password changed",
    });
  } catch (error) {
    res.status(404).json({
      messasge: error.message,
    });
  }
};

exports.getuser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await Users.findById(req.user.id);
    const getprofile = await Users.findOne({ username }).select("-password");
    const friendship = {
      friends: false,
      following: false,
      request: false,
      requestRecived: false,
    };
    if (!getprofile) {
      return res.json({ ok: false });
    }

    if (
      user.friends.includes(getprofile._id) &&
      getprofile.friends.includes(user._id)
    ) {
      friendship.friends = true;
    }

    if (user.following.includes(getprofile._id)) {
      friendship.following = true;
    }

    if (user.request.includes(getprofile._id)) {
      friendship.requestRecived = true;
    }

    if (getprofile.request.includes(user._id)) {
      friendship.request = true;
    }

    const posts = await Post.find({ user: getprofile._id })
      .populate("user")
      .populate(
        "comments.comentedBy",
        "profilePicture fName lName username commentedAt"
      )
      .sort({ createdAt: -1 });

    await getprofile.populate("friends", "fName lName username profilePicture");
    await getprofile.populate(
      "followers",
      "fName lName username profilePicture"
    );
    res.json({ ...getprofile.toObject(), posts, friendship });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.getprofilepicture = async (req, res) => {
  try {
    const { url } = req.body;
    await Users.findByIdAndUpdate(req.user.id, {
      profilePicture: url,
    });
    res.json(url);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.getcoverpicture = async (req, res) => {
  try {
    const { url } = req.body;
    await Users.findByIdAndUpdate(req.user.id, {
      cover: url,
    });
    res.json(url);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.updatedetails = async (req, res) => {
  try {
    const { infos } = req.body;
    const update = await Users.findByIdAndUpdate(
      req.user.id,
      {
        details: infos,
      },
      {
        new: true,
      }
    );
    res.send(update.details);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.addfriend = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      let sender = await Users.findById(req.user.id);
      let reciver = await Users.findById(req.params.id);

      if (
        !reciver.friends.includes(sender._id) &&
        !reciver.request.includes(sender._id)
      ) {
        await reciver.updateOne({
          $push: { request: sender._id },
        });
        await reciver.updateOne({
          $push: { followers: sender._id },
        });
        await sender.updateOne({
          $push: { following: reciver._id },
        });
        res.json({ message: "Friend request has been sent" });
      } else {
        return res.json({
          message: "Already friend",
        });
      }
    } else {
      return res.json({
        message: "You can't send request to your self",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
exports.cancelrequest = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      let sender = await Users.findById(req.user.id);
      let reciver = await Users.findById(req.params.id);

      if (
        !reciver.friends.includes(sender._id) &&
        reciver.request.includes(sender._id)
      ) {
        await reciver.updateOne({
          $pull: { request: sender._id },
        });
        await reciver.updateOne({
          $pull: { followers: sender._id },
        });
        await sender.updateOne({
          $pull: { following: reciver._id },
        });
        res.json({ message: "Cancel request" });
      } else {
        return res.json({
          message: "Already cancled",
        });
      }
    } else {
      return res.json({
        message: "You can't cancel request to your self",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
exports.follow = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      let sender = await Users.findById(req.user.id);
      let reciver = await Users.findById(req.params.id);

      if (
        !reciver.followers.includes(sender._id) &&
        !sender.following.includes(reciver._id)
      ) {
        await reciver.updateOne({
          $push: { followers: sender._id },
        });
        await sender.updateOne({
          $push: { following: reciver._id },
        });
        res.json({ message: "Successfully follow" });
      } else {
        return res.json({
          message: "Already follow",
        });
      }
    } else {
      return res.json({
        message: "You can't follow to your self",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
exports.unfollow = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      let sender = await Users.findById(req.user.id);
      let reciver = await Users.findById(req.params.id);

      if (
        reciver.followers.includes(sender._id) &&
        sender.following.includes(reciver._id)
      ) {
        await reciver.updateOne({
          $pull: { followers: sender._id },
        });
        await sender.updateOne({
          $pull: { following: reciver._id },
        });
        res.json({ message: "Successfully unfollow" });
      } else {
        return res.json({
          message: "Already unfollowed",
        });
      }
    } else {
      return res.json({
        message: "You can't unfollow to your self",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.acceprequest = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      let reciver = await Users.findById(req.user.id);
      let sender = await Users.findById(req.params.id);

      if (reciver.request.includes(sender._id)) {
        await reciver.update({
          $push: { friends: sender._id, following: sender._id },
        });
        await sender.update({
          $push: { friends: reciver._id, followers: reciver._id },
        });
        await reciver.updateOne({
          $pull: { request: sender._id },
        });
        res.json({ message: "Request accepted" });
      } else {
        return res.json({
          message: "Already friends",
        });
      }
    } else {
      return res.json({
        message: "You can't accept your self",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.unfriend = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      let sender = await Users.findById(req.user.id);
      let reciver = await Users.findById(req.params.id);

      if (
        reciver.friends.includes(sender._id) &&
        sender.friends.includes(reciver._id)
      ) {
        await reciver.update({
          $pull: {
            friends: sender._id,
            following: sender._id,
            followers: sender._id,
          },
        });
        await sender.update({
          $pull: {
            friends: reciver._id,
            followers: reciver._id,
            following: reciver._id,
          },
        });
        res.json({ message: "Unfriend" });
      } else {
        return res.json({
          message: "Already unfriend",
        });
      }
    } else {
      return res.json({
        message: "You can't unfriend to your self",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.deleterequest = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      let reciver = await Users.findById(req.user.id);
      let sender = await Users.findById(req.params.id);

      if (reciver.request.includes(sender._id)) {
        await reciver.update({
          $pull: {
            request: sender._id,
            followers: sender._id,
          },
        });
        await sender.updateOne({
          $pull: {
            following: reciver._id,
          },
        });
        res.json({ message: "Request deleted" });
      } else {
        return res.json({
          message: "Already delete request",
        });
      }
    } else {
      return res.json({
        message: "You can't delete request to your self",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.search = async (req, res) => {
  try {
    const searchTerm = req.params.searchTerm;
    const search = await Users.find({ $text: { $search: searchTerm } }).select(
      "fName lName username profilePicture"
    );
    res.json(search);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.addsearchhistory = async (req, res) => {
  try {
    const { searchUser } = req.body;
    const search = {
      user: searchUser,
      createdAt: new Date(),
    };
    const user = await Users.findById(req.user.id);
    const check = user.search.find((x) => x.user.toString() === searchUser);
    if (check) {
      await Users.updateOne(
        {
          _id: req.user.id,
          "search._id": check._id,
        },
        {
          $set: {
            "search.$.createdAt": new Date(),
          },
        }
      );
    } else {
      await Users.findByIdAndUpdate(req.user.id, {
        $push: {
          search,
        },
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.getsearchhistory = async (req, res) => {
  try {
    const getsearch = await Users.findById(req.user.id)
      .select("search")
      .populate("search.user", "fName lName username profilePicture");
    res.json(getsearch.search);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.removesearchhistory = async (req, res) => {
  try {
    const { searchUser } = req.body;
    await Users.updateOne(
      {
        _id: req.user.id,
      },
      {
        $pull: {
          search: {
            user: searchUser,
          },
        },
      }
    );
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.getfriendsinfopage = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id)
      .select("friends request")
      .populate("friends", "fName lName profilePicture username")
      .populate("request", "fName lName profilePicture username");
    // if user sent request part here
    const userSentRequest = await Users.find({
      request: mongoose.Types.ObjectId(req.user.id),
    }).select("fName lName profilePicture username");
    res.json({
      friends: user.friends,
      request: user.request,
      userSentRequest,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
