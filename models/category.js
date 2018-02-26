
var db=require('../dbconnect');
var category={

 getAllcategory:function(callback) {
    return db.query("select * from tbl_category", callback);
  },

  getcategoryById:function(id,callback){
 
return db.query("select * from tbl_category where Id=?",[id],callback);
 },

}

module.exports = category;