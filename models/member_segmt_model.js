var db = require("../dbconnect");
var memsegmt = {
  getMembSegment: function([id],callback) {
    return db.query
    (
      "select u.*,c.*,cr.* from tbl_user u,tbl_community c,tbl_community_registration cr where cr.comm_id_fk=c.comm_id and cr.email_id_fk=u.email_id and c.comm_id=?", [id],callback);
  }
};

module.exports = memsegmt;
