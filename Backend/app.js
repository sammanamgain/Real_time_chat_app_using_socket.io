const express = require("express");
const cors=require('cors')
const app = express();
require("dotenv").config();
app.use(cors())
const router = require("./Routes/route.js");
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT} port`);
});
