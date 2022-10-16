const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    fName: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },

    lName: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },

    username: {
      type: String,
      trim: true,
      text: true,
      unique: true,
      require: true,
    },

    email: {
      type: String,
      require: true,
      trim: true,
    },

    password: {
      type: String,
      require: true,
    },

    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/dk0xywcum/image/upload/v1665931000/ozztqkdoefb2sjc280mn.png",
    },

    cover: {
      type: String,
      trim: true,
    },

    bMonth: {
      type: Number,
      require: true,
      trim: true,
    },

    bDay: {
      type: Number,
      require: true,
      trim: true,
    },

    bYear: {
      type: Number,
      require: true,
      trim: true,
    },

    gender: {
      type: String,
      require: true,
    },

    verified: {
      type: Boolean,
      default: false,
    },

    followers: {
      type: Array,
      default: [],
    },

    following: {
      type: Array,
      default: [],
    },

    request: {
      type: Array,
      default: [],
    },

    search: [
      {
        user: {
          type: ObjectId,
          ref: "usermodel",
        },
      },
    ],

    details: {
      bio: {
        type: String,
      },

      othername: {
        type: String,
      },

      job: {
        type: String,
      },

      currentcity: {
        type: String,
      },

      workplace: {
        type: String,
      },

      college: {
        type: String,
      },

      highschool: {
        type: String,
      },

      hometown: {
        type: String,
      },

      relationship: {
        type: String,
        enum: [
          "Single",
          "In A Relationship",
          "It's Complicated",
          "Married",
          "Divorced",
        ],
      },

      instagram: {
        type: String,
      },
    },

    savedpost: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("usermodel", UserModel);
