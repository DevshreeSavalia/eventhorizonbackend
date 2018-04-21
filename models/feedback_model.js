var db = require('../dbconnect');
var feedback = {

    getAllFeedback: function (callback) {
        return db.query("select * from tbl_feedback", callback);
    },
    getFeedbackById:function(id, callback){
        return db.query("select * from tbl_feedback where e_id_fk=?",[id], callback);
    },
    addFeedback: function (feedback, callback) {
        return db.query("Insert into tbl_feedback values(?,?,?,?)", [feedback.f_id,feedback.f_title,feedback.e_id_fk,feedback.email_id_fk], callback);
    },
    deleteFeedback: function (id, callback) {
        return db.query("delete from tbl_feedback where f_id=?", [id], callback);
    },
}
module.exports = feedback;