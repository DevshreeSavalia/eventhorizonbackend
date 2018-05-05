var express = require('express');
var router = express.Router();
var comm = require('../models/community_model');
var multer = require('multer');
var path = require('path');

router.get("/:id?", function (req, res, next) {
  if (req.params.id) {
    comm.getCommunityById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  } else {
    comm.getAllCom(function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }

});
var storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, 'public/images/community')
  },
  filename: (req, file, cb) => {
    console.log(file.fieldname);
    console.log(Date.now());
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
var upload = multer({
  storage: storage
});

router.post('/', upload.single('image'), (req, res, next) => {
  console.log(req.body);
  console.log(req.file.filename);
  comm.addCommunity(req.body, req.file.filename, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;