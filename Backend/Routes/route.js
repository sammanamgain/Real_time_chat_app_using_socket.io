const express = require("express");
const router = express.Router();
const {
  sendAllChat,
  sendSpecificChat,
} = require("../Controller/chat/chatapi.js");
const { CheckUser } = require("../config/checkUser.js");
const {
  signUp,
  successMessage,
} = require("../Controller/user/usercontroller.js");


router.route("/app/chat").get(sendAllChat);
router.route("/app/chat/:id").get(sendSpecificChat);

router.route("/app/signup").post(CheckUser, signUp, successMessage);
module.exports = router;
