var express = require('express');
var router = express.Router();
var path = require('path');

var fuckingPath = path.resolve(__dirname + "/../public/views/index.html");

/* GET home page. */
router.get('*', function(req, res) {
  res.sendFile(fuckingPath);
});

module.exports = router;
