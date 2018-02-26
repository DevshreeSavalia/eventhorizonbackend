var mysql=require('mysql');
var con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'finalproject'
});
module.exports=con;