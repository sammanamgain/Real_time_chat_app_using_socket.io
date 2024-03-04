const User = require("../../Models/userschema.js");
exports.signUp = async (req, res, next) => {
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
};

exports.successMessage = async (req, res, next) => {
  res.status(201).json({
    success: true,
    message: "already logged in",
  });
};
