var db = require("../dbconnect");
var upmem = {
  getUpMemb: function([id],callback) {
    return db.query
    (
      "select e.*,er.*,u.* from tbl_event e,tbl_event_registration er,tbl_user u where  er.e_id_fk=e.e_id and er.email_id_fk=u.email_id and e.e_enddate>CURDATE() and e.e_id=?",[id],callback);
  }
};
module.exports = upmem;