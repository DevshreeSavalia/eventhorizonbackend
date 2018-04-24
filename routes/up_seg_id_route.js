var express = require("express");
var router = express.Router();
var up_seg_id = require("../models/up_seg_id_model");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    up_seg_id.getUpSegmentById(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;
