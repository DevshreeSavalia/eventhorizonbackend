var express=require('express');
var router=express.Router();
var comm_id=require('../models/comm_model_id');

router.get("/:id",function(req,res,next){
    if (req.params.id) {
    comm_id.getCommunityByIdd(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
    }
});


module.exports=router;