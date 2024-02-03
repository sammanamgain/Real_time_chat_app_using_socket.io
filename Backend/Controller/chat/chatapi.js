exports.sendAllChat=(req, res, next)=> {
  res.status(200).json({
    success: true,
    message: {
      data: "successfully transfered",
    },
  });
}
exports.sendSpecificChat=(req, res, next)=> {
  const {id} = req.params
  res.status(200).json({
    success: true,
    message: {
      data: id
    },
  });
}

