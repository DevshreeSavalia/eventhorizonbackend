var db = require("../dbconnect");
var com_id = {
  getCommunityByIdd: function(id, callback) {
    return db.query(
      "select * from tbl_community where comm_id=?",
      [id],
      callback
    );
  }
};
module.exports = com_id;
