const User = require("../../Models/userschema.js");
const asyncHandler = require("express-async-handler");


exports. allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user.id } });
  res.send(users);
});



exports.signUp = asyncHandler(async (req, res, next) => {

  console.log("sign up page received")
  try {
    if (req.user) {
      return next();
    }

    const { name, email, password, pic } = req.body;
    const user = await User.create({ name, email, password, pic });
    const jwt = user.getJWTToken();

    res.status(201).cookie("jwt", jwt, { httpOnly: true }).json({
      success: true,

      message: user,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      message: e,
      extrainfo: "signup page issue",
    });
  }
});

exports.successMessage = async (req, res, next) => {
  res.status(201).json({
    success: true,
    message: "already logged in",
  });
};
exports.LogIn = asyncHandler(async (req, res, next) => {
  try {
    if (req.user) {
      return next();
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (await user.comparePassword(password)) {
      res.status(200).json({
        success: true,
        message: " Logged in sucesssfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "login failed",
      });
    }
  } catch (e) {
    res.status(404).json({
      success: false,
      message: e,
      extrainfo: "Login page issue",
    });
  }
});
