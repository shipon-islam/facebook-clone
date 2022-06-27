const bcrypt = require("bcrypt");
const { generateToken } = require("../utilities/generateToken");
const user = require("../models/userModel");
const postModal = require("../models/postModel");
const profile = require("../models/profileModel");

//method:POST
//url:user/signup
//access:Public

const createUser = async (req, res) => {
  const { username, email, password, phone } = req.body;

  //find user from db

  const existUser = await user.findOne({ email });

  if (!existUser) {
    //hash user password
    const hashPassword = await bcrypt.hash(password, 10);

    let User = new user({
      username,
      email,
      phone,
      password: hashPassword,
    });
    const userData = await User.save();

    const Profile = new profile({
      user: userData._id,
    });
    await Profile.save();
    res.status(201).send(userData);
  } else {
    res.status(400).json({ error: "email already exist" });
  }
};
//method:GET
//url:user/get
//access:Private
const getUser = (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(404).send("not found");
  }
};
const getAllUser = async (req, res) => {
  try {
    const posts = await user.find();
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
};

//method:POST
//url:user/Login
//access:public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const User = await user.findOne({ email });
  if (User) {
    const isMatchPassword = await bcrypt.compare(password, User.password);
    if (isMatchPassword) {
      const userObj = {
        id: User._id,
        username: User.username,
        email: User.email,
        avatar: User.avatar,
      };

      //setCookies
      res.cookie(process.env.COOKIE_NAME, generateToken(userObj), {
        maxAge: process.env.JWT_EXPIRES,
        httpOnly: true,
        signed: true,
      });
      res.send("login successfully");
    } else {
      res.status(400).json({ error: "invalid creadintial" });
    }
  } else {
    res.status(400).json({ error: "invalid creadintial" });
  }
};

//method:delete
//url:user/logout
//access:Private
const logout = (req, res) => {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

  try {
    if (cookies) {
      res.clearCookie(process.env.COOKIE_NAME);
      res.send("user logout");
    }
  } catch (error) {
    console.log(error);
    res.send("err to failed");
  }
};

module.exports = {
  createUser,
  getUser,
  loginUser,
  logout,
  getAllUser,
};
