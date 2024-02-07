const jsonwt = require("jsonwebtoken");
exports.CheckUser = async (req, res, next) => {
  try {
    //console.log(req.cookies.jwt);
    if (req.cookies.jwt === undefined) {
      console.log("undefined");

      return next();
    }
    console.log("why the fk this line has reachedS");
    const { jwt } = req.cookies;

    let currdata = null;
    console.log(jwt);

    jsonwt.verify(jwt, "aminrupnammsa", (err, decoded) => {
      if (err) {
        console.error("Error decoding JWT:", err);
      } else {
        console.log("Decoded JWT:", decoded);
        currdata = decoded;
      }
    });

    next(req, res, next);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      success: false,
      message: e,
    });
  }
};
