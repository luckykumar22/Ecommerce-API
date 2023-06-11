const mongoose = require("mongoose");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting server"));

db.once("open", function () {
  console.log("connected to database :: mongo db");
});

module.exports=db;