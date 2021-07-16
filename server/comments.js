var path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

var mailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var fs = require('fs');

var smtpTransport = mailer.createTransport(smtpTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
}));

module.exports = {
    processComment (req, res) {
        var data = req.body.data;
        emailMe(data)

        res.sendStatus(200)
    },
}

function emailMe(data){
    var mail = {
        from: data.email,
        replyTo: data.email,
        to: "guanzo91@gmail.com",
        subject: data.subject,
        html: `
            <p>Name: ${data.name}</p>
            <p>Comment: ${data.comment}</p>`
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){ console.log(error); return; }
        
        console.log("Message sent!");
        smtpTransport.close();
    });
    
    
}
