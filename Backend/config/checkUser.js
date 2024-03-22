const jsonwt = require("jsonwebtoken");
exports.CheckUser = async (req, res, next) => {
  
  console.log("request received");
  try {
    if (req.cookies.jwt === undefined) {
      return next();
    }

    const { jwt } = req.cookies;

    let currdata = null;

    jsonwt.verify(jwt, process.env.secretcode, (err, decoded) => {
      if (err) {
        console.error("Error decoding JWT:", err);
      } else {
        currdata = decoded;
        req.user = currdata;

        return next();
      }
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      message: e,
    });
  }
};
