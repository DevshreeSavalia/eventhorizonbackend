var db = require("../dbconnect");
var uppage = {
  getUpPage: function(id, callback) {
    return db.query(
      "select e.*,c.*,u.* from tbl_event e,tbl_user u,tbl_community c where e.comm_id_fk=c.comm_id and c.email_id_fk=u.email_id and u.email_id=? and e_date>CURDATE()",
      [id],callback);
  }
};
module.exports = uppage;
