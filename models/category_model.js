var db=require("../dbconnect");
var category={

getAllCategory :function(callback){
   return db.query("select ca.c_name from tbl_category ca",callback);
},

getCommunity :function(id,callback){
    return db.query("select c.comm_name from tbl_community c,tbl_category ca where c.c_id_fk=ca.c_id and ca.c_id=?",[id],callback);
}

};
module.exports=category;