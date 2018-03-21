var express=require('express');
var router=express.Router();
var mail=require('../models/maildemo');

router.post('/', function(req, res, next) {
    mail.sendMail(req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
 
  module.exports = router;