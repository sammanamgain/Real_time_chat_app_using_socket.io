const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://amgain02:samman@cluster0.bm9is20.mongodb.net/Messenging?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
module.exports = connect;
