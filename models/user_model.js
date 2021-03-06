var db = require("../dbconnect");
var user = {
  getAllUser: function(callback) {
    return db.query("Select * from tbl_user", callback);
  },
  getUserById: function(id, callback) {
    return db.query("select * from tbl_user where email_id=?", [id], callback);
  },
  addUser: function(User, callback) {
    return db.query(
      "insert into tbl_user(email_id,user_name,mobile,gender,password) values(?,?,?,?,?)",
      [
        User.email_id,
        User.user_name,
        User.mobile,
        User.gender,
        User.password
      ],
      callback
    );
  },
  deleteUser: function(id, callback) {
    return db.query("delete from tbl_user where email_id=?", [id], callback);
  },
  updateUser: function(id, User, callback) {
    return db.query(
      "update tbl_user set user_name=?,mobile=?,gender=?,password=? where email_id=?",
      [
        User.user_name,
        User.mobile,
        User.gender,
        User.password,
        id
      ],
      callback
    );
  }
};
module.exports = user;