var express = require("express");
var router = express.Router();
var upcompge = require("../models/upcom_page_model");

router.post("/", function(req, res, next) {
    upcompge.getUpPage(req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});
module.exports = router;
