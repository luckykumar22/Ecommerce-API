const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("in");
});
router.use("/products", require("./products"));

module.exports = router;
