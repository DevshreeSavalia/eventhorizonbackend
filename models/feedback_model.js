var db = require('../dbconnect');
var feedback = {

    getAllFeedback: function (callback) {
        return db.query("select * from tbl_feedback", callback);
    },
    addFeedback: function (feedback, callback) {
        console.log(User.mobile_no);
        return db.query("Insert into tbl_feedback values(?,?,?,?)", [feedback.f_id,feedback.f_title,feedback.e_id_fk,feedback.email_id_fk,feedback.f_date], callback);
    },
    deleteFeedback: function (id, callback) {
        return db.query("delete from tbl_feedback where f_id=?", [id], callback);
    },
}

module.exports = feedback;