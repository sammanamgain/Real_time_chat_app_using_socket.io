const express = require("express");
const connect = require("./config/database.js");
const cors = require("cors");
const cookie_parser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorhandler");
const corsOptions = {
  // origin:'https://abc.onrender.com',
  AccessControlAllowOrigin: "*",
  origin: "http://localhost:5173/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
const app = express();
app.use(cookie_parser());
require("dotenv").config();
connect();
app.use(cors(cors));
app.use(express.json());

const router = require("./Routes/route.js");
app.use(router);
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT} port`);
});
