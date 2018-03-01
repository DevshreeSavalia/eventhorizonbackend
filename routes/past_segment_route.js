var express = require("express");
var router = express.Router();
var pastsmg = require("../models/past_segmt_model");

router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    pastsmg.getPastSegment(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;
