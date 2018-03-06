var db = require("../dbconnect");
var memsegmt = {
  getMembSegment: function([id],callback) {
    return db.query(
      "select u.* from tbl_user as u,tbl_community as c,tbl_community_registration as com where com.comm_id_fk=c.comm_id and c.email_id_fk=u.email_id and c.comm_id_fk=?",
      [id],callback
    );
  }
};

module.exports = memsegmt;
