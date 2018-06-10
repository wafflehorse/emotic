var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/yoyo", function(req, res, next) {
  console.log('api call to yoyo')
  res.send({ text: "Yo Yo whatup!" });
});

module.exports = router;
