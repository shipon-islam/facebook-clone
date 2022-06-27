const express = require("express");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();
const {
  profileUpdate,
  profileGet,
  getOne,
} = require("../controllers/profileController");
router.put("/", checkLogin, profileUpdate);
router.get("/", checkLogin, profileGet);
router.get("/all", checkLogin, getOne);
module.exports = router;
