const express = require("express");
const router = express.Router();

const { CheckUser } = require("../config/checkUser.js");
const { handleRoute } = require("../config/Nonroute.js");
const {
  signUp,
  LogIn,
  successMessage,
  allUsers
} = require("../Controller/user/usercontroller.js");


const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../Controller/chat/chatapi.js");




router.route("/app/signup").post(CheckUser, signUp, successMessage);
router.route("/app/log-in").post(CheckUser, LogIn, successMessage);
router.route('/app/getalluser').get(CheckUser,allUsers)








router.route("/app/chat/").post(CheckUser, accessChat);
router.route("/app/chat/").get(CheckUser, fetchChats);
router.route("/app/chat/group").post(CheckUser, createGroupChat);
router.route("/app/chat/rename").put(CheckUser, renameGroup);
router.route("/app/chat/groupremove").put(CheckUser, removeFromGroup);
router.route("/app/chat/groupadd").put(CheckUser, addToGroup);



router.route("*").all(handleRoute);
module.exports = router;
