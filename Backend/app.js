const express = require("express");
const connect = require("./config/database.js");
const cors = require("cors");
const cookie_parser = require("cookie-parser");
const app = express();
app.use(cookie_parser());
require("dotenv").config();
connect();
app.use(cors());
app.use(express.json());

const router = require("./Routes/route.js");
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT} port`);
});
