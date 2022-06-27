const mongoose = require("mongoose");

const postScrema = new mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    post: {
      type: String,
    },
    category: { type: String, required: true, default: "text" },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },

  { timestamps: true }
);

const postModal = mongoose.model("Post", postScrema);
module.exports = postModal;
