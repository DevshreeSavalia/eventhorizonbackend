var db = require("../dbconnect");
var com_id = {
  getCommunityByIdd: function(id, callback) {
    return db.query(
      "select c.*,cr.*,u.* from tbl_community c,tbl_community_registration cr,tbl_user u where cr.comm_id_fk=c.comm_id and cr.email_id_fk=u.email_id and c.comm_id=?",
      [id],
      callback
    );
  }
};
module.exports = com_id;
