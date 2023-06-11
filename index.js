const express = require("express");
const port = 8000;
const mongoose = require("mongoose");

const app = express();

app.listen(port, function (err) {
  if (err) {
    console.error("Error in setting up server");
    return;
  } else {
    console.log("Server up and running on port:", port);
  }
});
