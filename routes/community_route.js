var express=require('express');
var router=express.Router();
var comm=require('../models/community_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        comm.getCommunityById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    
});


router.post('/', function(req, res, next) {
  comm.addCommunity(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});



module.exports=router;