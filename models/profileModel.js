const mongoose = require("mongoose");
const profileScheema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  profilePic: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    required: true,
  },
  coverPic: {
    type: String,
    default: "https://fakeimg.pl/640x360",
    required: true,
  },
  bio: {
    type: String,
  },
  phone: { type: String },
});
const profileModel = mongoose.model("Profile", profileScheema);
module.exports = profileModel;
