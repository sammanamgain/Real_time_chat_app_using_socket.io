const express = require("express");
const connect = require("./config/database.js");
const cors = require("cors");
const cookie_parser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorhandler");
const router = require("./Routes/route.js");

const app = express();
app.use(cookie_parser());
require("dotenv").config();
connect();
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],

}));
//app.use(cors);
app.use(express.json());


app.use(router);
app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log(`app is listening on ${process.env.PORT} port`);
});
