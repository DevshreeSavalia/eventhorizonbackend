var db = require("../dbconnect");
var pastsegmt_id={

    getUpPastById:function(id,callback){
        return db.query("select * from tbl_events where e_id=?",[id],callback);
    },
    
};
module.exports=pastsegmt_id;