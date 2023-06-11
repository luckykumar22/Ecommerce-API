const mongoose = require("mongoose");

mongoose.connect('mongodb://121.0.0.1:27017/Ecom-API')
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting server"));

db.once("open", function () {
  console.log("connected to database :: mongo db");
});

module.exports=db;