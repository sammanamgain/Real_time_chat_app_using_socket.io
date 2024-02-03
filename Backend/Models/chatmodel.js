const mongoose = require("mongoose");
const chatschema = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroup: { type: bool, defaul: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  {
    timestamps: true,
  }
);
const ChatModel = mongoose.model("ChatModel", chatschema);
module.exports = ChatModel;
