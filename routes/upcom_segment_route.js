var express = require("express");
var router = express.Router();
var usegmt = require("../models/upcom_segmt_model");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    usegmt.getUpSegment(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;
