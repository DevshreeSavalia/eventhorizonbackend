var express = require("express");
var router = express.Router();
var upcompge = require("../models/upcom_page_model");

router.get('/', function(req, res, next) {
    upcompge.getUpPage(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});
module.exports = router;
