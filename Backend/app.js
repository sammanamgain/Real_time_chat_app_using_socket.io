const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./Routes/route.js");
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT} port`);
});
