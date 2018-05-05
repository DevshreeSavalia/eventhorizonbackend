var db = require("../dbconnect");
var pastseg={

    getPastSegment:function([id],callback){
        return db.query("select e.*, c.* from tbl_events e,tbl_community c where e.comm_id_fk=c.comm_id and c.comm_id=? and e.e_enddate<CURDATE()",[id],callback);
    },
      
};
