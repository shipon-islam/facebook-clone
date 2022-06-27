const mongoose = require("mongoose");
const userScrema = new mongoose.Schema({
  avatar: {
    type: String,
    required: true,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
});

const userModal = mongoose.model("User", userScrema);
module.exports = userModal;
