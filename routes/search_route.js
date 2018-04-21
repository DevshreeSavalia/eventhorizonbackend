var express = require("express");
var router = express.Router();
var sear = require("../models/search_model");

router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
   sear.getSearch(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;