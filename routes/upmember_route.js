var express = require("express");
var router = express.Router();
var upme = require("../models/upcoming_members");

router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    upme.getUpMemb(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;