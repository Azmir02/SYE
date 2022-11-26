const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Schema = mongoose.Schema;

const postData = new Schema(
  {
    type: {
      type: String,
      enum: ["profilePicture", "cover", null],
      default: null,
    },

    images: {
      type: Array,
    },

    text: {
      type: String,
    },

    background: {
      type: String,
    },

    user: {
      type: ObjectId,
      ref: "usermodel",
    },

    comments: [
      {
        comment: {
          type: String,
        },

        image: {
          type: String,
        },

        comentedBy: {
          type: ObjectId,
          ref: "usermodel",
        },

        commentedAt: {
          type: Date,
          require: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postData);
