var db = require("../dbconnect");
var loginn = {
 
  getLogin: function(Login, callback) {
    return db.query("select * from tbl_user where user_name=?, password=? and type=?", [Login.user_name, Login.password,Login.type], callback);
  },
}
module.exports = loginn;