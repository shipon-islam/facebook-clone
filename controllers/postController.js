const postModal = require("../models/postModel");
const { unlink } = require("fs");
const path = require("path");
const comment = require("../models/commentModel");

//create new post status

const postStatus = async (req, res) => {
  const { post, avatar, category } = req.body;

  try {
    if (post || avatar) {
      let newPost = new postModal({
        avatar,
        post,
        user: req.user.id,
        category,
      });

      const resPost = await newPost.save();
      if (!resPost) {
        res.status(400).json({ errors: "not create" });
      } else {
        res.status(201).send(resPost);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// post like api

const likeStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postModal.findById(id);
    const isLike = post.likes.includes(req.user.id);
    if (!isLike) {
      const posts = await postModal.findOneAndUpdate(
        { _id: id },
        {
          $push: { likes: req.user.id },
        }
      );
      res.send(posts);
    } else {
      const posts = await postModal.findOneAndUpdate(
        { _id: id },
        {
          $pull: { likes: req.user.id },
        }
      );
      res.send(posts);
    }
  } catch (error) {
    console.log(error);
  }
};

//get athounticated user post

const getStatus = async (req, res) => {
  try {
    const User = await postModal
      .find({ user: req.user.id })
      .populate([
        {
          path: "comments",
          populate: [
            { path: "user" },
            { path: "replies", populate: [{ path: "user" }] },
          ],
        },
        {
          path: "user",
        },
      ])
      .sort({ createdAt: -1 });

    res.send(User);
  } catch (error) {
    console.log(error);
  }
};
// get all user post status
const allstatus = async (req, res) => {
  try {
    const user = await postModal
      .find()
      .populate([
        {
          path: "comments",
          populate: [
            { path: "user" },
            { path: "replies", populate: [{ path: "user" }] },
          ],
        },
        {
          path: "user",
        },
      ])
      .sort({ createdAt: -1 });

    res.send(user);
  } catch (error) {}
};

//delete post

const deletePost = async (req, res) => {
  const postId = req.params.id;

  const resp = await postModal.findById(postId);

  if (resp.user._id == req.user.id) {
    const deleteUser = await postModal.findByIdAndDelete(postId);
    res.status(200).send(deleteUser);
  } else {
    res.status(400).json({ error: "you cant delete other post" });
  }
};

//post comment api
const commentApi = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    if (req.body.coment) {
      const Comment = new comment({
        post: postId,
        user: userId,
        body: req.body.coment,
      });
      const comments = await Comment.save();
      await postModal.findOneAndUpdate(
        { _id: postId },
        { $push: { comments: comments._id } }
      );
      res.send(comments);
    }
  } catch (error) {
    console.log(error);
  }
};

//user replay api
const replayApi = async (req, res) => {
  const commentId = req.params.id;
  try {
    if (req.body.rebody) {
      const replies = await comment.findOneAndUpdate(
        { _id: commentId },
        { $push: { replies: { body: req.body.rebody, user: req.user.id } } }
      );
      res.send(replies);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postStatus,
  getStatus,
  likeStatus,
  allstatus,
  deletePost,
  commentApi,
  replayApi,
};
