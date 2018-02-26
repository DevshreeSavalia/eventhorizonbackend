var express = require("express");
var router = express.Router();
var com_reg = require("../models/comm_reg_model");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    com_reg.getRegById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    com_reg.getAllReg(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/", function(req, res, next) {
  com_reg.addReg(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function(req, res, next) {
  com_reg.deleteReg(req.params.id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;

