var db = require("../dbconnect");
var profile = {

    getProfile: function (id, callback) {
     return db.query("select u.* from tbl_user u where u.email_id=?", [id], callback);
    }
}
module.exports = profile;
