var db=require("../dbconnect");
var email=require("emailjs/email");
var mail={
    sendMail:function(demo,callback){
    
        var server  = email.server.connect({
           user:    "evthorizonn@gmail.com",
           password:"eventhorizon!", 
           host:    "smtp.gmail.com", 
           ssl:     true,
           port:465
        });
        
        server.send({
           text:    demo.message,
           from:    "evthorizonn@gmail.com", 
           to:      demo.name,
           subject: demo.subject
        }, callback);
        }
}
module.exports=mail;