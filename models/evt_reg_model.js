var db = require("../dbconnect");
var evt_reg = {
    evtReg: function (Register, callback) {
        return db.query("insert into tbl_event_registration (reg_id,e_id_fk,email_id_fk) values(?,?,?)", [Register.reg_id, Register.e_id_fk, Register.email_id_fk], callback);
    },

};
module.exports = evt_reg;