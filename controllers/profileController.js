const profile = require("../models/profileModel");
const User = require("../models/userModel");

// request:put url: "api/profile"

const profileUpdate = async (req, res) => {
  const { bio, phone, profilepic, coverpic } = req.body;
  let Profile;
  if (profilepic) {
    console.log(profilepic);
    Profile = {
      profilePic: profilepic,
    };
    await User.findOneAndUpdate({ _id: req.user.id }, { avatar: profilepic });
  } else if (coverpic) {
    Profile = {
      coverPic: coverpic,
    };
  } else if (bio && phone) {
    Profile = {
      bio,
      phone,
    };
  } else {
    Profile = {
      profilePic: profilepic,
      coverPic: coverpic,
      bio,
      phone,
    };
  }
  const profileData = await profile.findOneAndUpdate(
    { user: req.user.id },
    Profile
  );

  res.send(profileData);
};
// request:get url: "api/profile"

const profileGet = async (req, res) => {
  try {
    const getProfileInformation = await profile
      .find({ user: req.user.id })
      .populate("user");
    res.status(201).send(getProfileInformation);
  } catch (error) {
    console.log(error);
  }
};
const getOne = async (req, res) => {
  try {
    const getProfileInformation = await profile.find().populate("user");
    res.status(201).send(getProfileInformation);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { profileUpdate, profileGet, getOne };
