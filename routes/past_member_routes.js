var express = require("express");
var router = express.Router();
var pasme = require("../models/past_members");

router.get('/:id', function(req, res, next) {
  if (req.params.id) {
    pasme.getPastMemb(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;