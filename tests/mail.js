var nodemailer = require("nodemailer");
var fs = require('fs');
var path = require('path');

var transport = nodemailer.createTransport({

	service: 'Gmail',
    auth: {
        user: "govardhan.selenium@gmail.com",
        pass: "gova@1234"
    }
});

//console.log("SMTP Configured");

var mailOptions = {
    from: 'govardhan.selenium@gmail.com', // sender address
    to: 'govardhan.selenium@gmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
	//text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            
           // 'path': './screenshots/*.jpg',
			
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
		response.send(err);
    } else {
        console.log("Message sent: " + info.response);
		response.send(info);
    }

});