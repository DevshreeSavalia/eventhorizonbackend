var db = require("../dbconnect");
var search={

   getSearch:function([id],callback){
   
       return db.query("select c.*,ct.* from tbl_community c,tbl_category ct where c.c_id_fk=ct.c_id and ct.c_id=?",[id],callback);
     }

};

module.exports=search;
