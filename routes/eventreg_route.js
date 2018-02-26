var express = require("express");
var router = express.Router();
var eventreg = require("../models/event_reg");

router.delete("/:id", function(req, res, next) {
    eventreg.deleteevent(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
module.exports = router;