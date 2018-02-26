var express = require("express");
var router = express.Router();
var userss = require("../models/user_model");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    userss.getUserById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    userss.getAllUser(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/", function(req, res, next) {
  userss.addUser(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function(req, res, next) {
  userss.deleteUser(req.params.id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.put("/:id", function(req, res, next) {
  evt.updateUser(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports=router;