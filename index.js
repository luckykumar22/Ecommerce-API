const express = require("express");
const mongoose = require("mongoose");
const port = 8000;

const app = express();
const db = require("./config/mongoose");
const Routes = "./routes/index.js";

// to read form data
app.use(express.urlencoded);

app.set("view engine", "ejs");
app.set("views", "./");

//routes
app.use("/", Routes);

app.listen(port, function (err) {
  if (err) {
    console.error("Error in setting up server");
    return;
  }
  console.log("Server up and running on port:", port);
});
