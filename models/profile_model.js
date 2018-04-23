var db = require("../dbconnect");
var profile = {

    getProfile: function (id, callback) {

        return db.query("select u.*,er.*,e.* from tbl_user u,tbl_event e,tbl_event_registration er where er.e_id_fk=e.e_id and er.email_id_fk=u.email_id and u.email_id=? and e.e_enddate<CURDATE()", [id], callback);
    }
}
module.exports = profile;
