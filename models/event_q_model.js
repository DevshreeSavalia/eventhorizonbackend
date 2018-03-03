var db = require('../dbconnect');
var event_q_model = {
    getEventByCommunityId :function(id,callback){
            return db.query("select e.*,c.*,u.*,cat.* from tbl_event e,tbl_community c,tbl_category cat,tbl_user u where e.comm_id_fk=c.comm_id and c.comm_id=?",[id],callback);

    }
};
module.exports = event_q_model;