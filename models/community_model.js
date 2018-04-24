var db = require("../dbconnect");
var community =
    {
        getCommunityById: function (id, callback) {
            return db.query("select c.* from tbl_community c,tbl_community_registration cr,tbl_user u where cr.comm_id_fk=c.comm_id and cr.email_id_fk=u.email_id and u.email_id=?", [id], callback);
        },

        addCommunity: function (com, filename, callback) {
            return db.query("insert into tbl_community(comm_id,comm_name,c_id_fk,comm_desc,banner_image,email_id_fk) values (?,?,?,?,?,?)", [com.comm_id, com.comm_name, com.c_id_fk, com.comm_desc, filename, com.email_id_fk], callback);

        },

    }
module.exports = community;