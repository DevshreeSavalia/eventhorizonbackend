var db=require('../dbconnect');
var community={

    addcommunity:function(community,callback){
    return db.query("Insert into tbl_community values(?,?,?,?)",[community.c_id,community.comm_name,community.comm_id,community.comm_desc,community.email_id],callback);
    },


    deletecommunity:function(id,callback){
     return db.query("delete from tbl_community where comm_id=?",[id],callback);
    },

}
module.exports = community;