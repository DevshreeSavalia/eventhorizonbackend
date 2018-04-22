var express = require("express");
var router = express.Router();
var event_reg = require("../models/evt_reg_model");
router.post("/", function(req, res, next) {
  event_reg.evtReg(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});



module.exports = router;

