var express=require('express');
var router=express.Router();
var cat=require('../models/category_model');
{

   router.get('/:id?',function(req,res,next){

    if(req.params.id){
        cat.getCommunity(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }

    else{
       cat.getAllCategory(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
    }
    
});


}

module.exports=router;