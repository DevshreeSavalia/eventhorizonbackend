var db = require("../dbconnect");
var uppage = {
  getUpPage: function(id, callback) {
    return db.query(
      "select e.*,e_reg.*,u.* from tbl_event e,tbl_event_registration e_reg,tbl_user u where e_reg.e_id_fk=e.e_id and e_reg.email_id_fk=u.email_id and u.email_id=? and e.e_enddate>CURDATE()",
      [id],callback);
  }
};
module.exports = uppage;
