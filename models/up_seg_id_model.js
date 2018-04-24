var db = require("../dbconnect");
var upsegmt_id={

    getUpSegmentById:function([id],callback){
        return db.query("select * from tbl_event where e_id=?",[id],callback);
    },
    
};
module.exports=upsegmt_id;