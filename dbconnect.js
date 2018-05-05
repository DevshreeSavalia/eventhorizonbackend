var mysql=require('mysql');
var con=mysql.createPool({
    // host:'localhost',
    // user:'root',
    // password:'',
    // database:'finalproject'

    host:'eventhorizon.db.9462939.ed4.hostedresource.net',
    user:'eventhorizon',
    password:'Demo@1212',
    database:'eventhorizon'
});
module.exports=con;

