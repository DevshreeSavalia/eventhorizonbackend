var db = require("../dbconnect");
var upsegmt_id={

    getUpSegmentById:function(id,callback){
        console.log("hello:");
        return db.query("select * from tbl_events where e_id=?",[id],callback);
        
    }
};
module.exports=upsegmt_id;