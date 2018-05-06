var db = require("../dbconnect");
var upsegmt={

    getUpSegment:function(id,callback){
        return db.query("select e.*,c.* from tbl_events e,tbl_community c where e.comm_id_fk=c.comm_id and e_enddate>CURDATE() and c.comm_id=?",[id],callback);
    },

    // getUpSegment:function([id],callback){
    //     return db.query("select * from tbl_events where e_id=?",[id],callback);
    // },
    
};
module.exports=upsegmt;