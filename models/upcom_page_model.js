var db = require("../dbconnect");
var uppage={
    getUpPage:function(callback){
        return db.query("select e.*,c.* from tbl_event e,tbl_community c where e.comm_id_fk=c.comm_id and e_date>CURDATE()",callback);
    },
};
module.exports=uppage;