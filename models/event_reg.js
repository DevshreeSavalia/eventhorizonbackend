var db=require('../dbconnect');
var event={

    deleteevent:function(id,callback){
     return db.query("delete from tbl_event where e_id=?",[id],callback);
    },

}
module.exports = event;