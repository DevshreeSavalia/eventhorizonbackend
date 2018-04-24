var express = require("express");
var router = express.Router();
var past_seg_id = require("../models/past_seg_id_model");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    past_seg_id.getUpPastById(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;
