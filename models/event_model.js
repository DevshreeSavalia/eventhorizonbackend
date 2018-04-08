var db = require('../dbconnect');
var event = {

    getAllEvent: function (callback) {
        return db.query("select * from tbl_event", callback);
    },
    getEventById: function (id, callback) {

        return db.query("select * from tbl_event where email_id=?", [id], callback);
    },
    addEvent: function (User, callback) {
        console.log(User.mobile_no);
        return db.query("Insert into tbl_event values(?,?,?,?,?,?)", [event.e_id,event.e_name,event.e_startdate,event.e_enddate,event.e_venue,event.comm_id_fk,event.e_desc,event.image], callback);
    },
   deleteEvent: function (id, callback) {
        return db.query("delete from tbl_event where e_id=?", [id], callback);
    },
}
module.exports = event;