const express = require("express");
const router = express.Router();
const {
  sendAllChat,
  sendSpecificChat,
} = require("../Controller/chat/chatapi.js");

router.route("/app/chat").get(sendAllChat);
router.route("/app/chat/:id").get(sendSpecificChat);
module.exports = router;
