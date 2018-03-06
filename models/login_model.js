var db = require("../dbconnect");
var loginn = {
 
  getLogin: function(Login, callback) {
    return db.query("select * from tbl_user where email_id=? and password=? ", [Login.email_id, Login.password], callback);
  },
}
module.exports = loginn;