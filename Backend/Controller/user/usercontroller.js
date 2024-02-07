const User = require("../../Models/userschema.js");
exports.signUp = async (req, res, next) => {
  try {
    console.log("this signup reached");
    const { name, email, password, pic } = req.body;
    const user = await User.create({ name, email, password, pic });
    const jwt = user.getJWTToken();

    res.status(201).cookie("jwt", jwt, { httpOnly: true }).json({
      success: true,
      message: user,
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      success: false,
      message: e,
    });
  }
};
