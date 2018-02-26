var express = require('express');
var router = express.Router();
var category = require("../models/category");

router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    category.getcategoryById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    category.getAllcategory(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});

module.exports = router;
