var express = require('express');
var router = express.Router();
var comm = require("../models/community");

router.post('/', function (req, res, next) {

  comm.addcommunity(req.body, function (err, count) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});

router.delete("/:id", function (req, res, next) {
  comm.deletecommunity(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});



module.exports = router;