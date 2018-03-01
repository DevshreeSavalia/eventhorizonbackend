var db=require("../dbconnect");
var comm_reg={

    getAllReg: function(callback){
        return db.query("select * from tbl_community_registration",callback);
    },
    getRegById: function(id, callback) {
        return db.query("select * from tbl_community_registration where comm_reg_id=?", [id], callback);
      },
    addReg:function(Register,callback){
        return db.query("insert into tbl_community_registration (comm_reg_id,comm_id_fk,email_id_fk) values(?,?,?)",[Register.comm_reg_id,Register.comm_id_fk,Register.email_id_fk],callback);
    },
    deleteReg:function(id,callback){
        return db.query("delete from tbl_community_registration where comm_reg_id=?",[id],callback);
    }

};
module.exports=comm_reg;