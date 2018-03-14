var express = require("express");
var router = express.Router();
var upcompage = require("../models/upcom_page_model");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    upcompage.getUpPage(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
module.exports = router;
