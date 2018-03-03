var db=require("../dbconnect");
var profile={

getProfile:function(id,callback){

    return db.query("select e.e_name, c.comm_name from tbl_event e,tbl_community c,tbl_user u where e.comm_id_fk=c.comm_id and c.email_id_fk=u.email_id and u.email_id=? and e.e_date<CURDATE()",[id],callback);
}



}
module.exports=profile;
