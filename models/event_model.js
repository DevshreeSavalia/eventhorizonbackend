var db = require('../dbconnect');
var events = {

    getAllEvent: function (callback) {
        return db.query("select * from tbl_events", callback);
    },
    getEventById: function (id, callback) {
        return db.query("select * from tbl_events where email_id=?", [id], callback);
    },
    addEvent: function (event,filename,callback) {
        // console.log(User.mobile_no);
        return db.query("Insert into tbl_events(e_id,e_name,e_startdate,e_enddate,e_venue,comm_id_fk,e_desc,image) values (?,?,?,?,?,?,?,?)",[event.e_id,event.e_name,event.e_startdate,event.e_enddate,event.e_venue,event.comm_id_fk,event.e_desc,filename],callback);
    },

   deleteEvent: function (id, callback) {
        return db.query("delete from tbl_events where e_id=?", [id], callback);
    },
}
module.exports = events;