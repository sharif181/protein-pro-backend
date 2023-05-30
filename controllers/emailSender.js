var nodemailer = require('nodemailer');




const email_sender = async (to_email)=>{
    var transport = nodemailer.createTransport({
        host: `${process.env.EMAIL_HOST}`,
        port: `${process.env.EMAIL_PORT}`,
        auth: {
          user: `${process.env.EMAIL}`,
          pass: `${process.env.PASSWORD}`
        }
      });
    
    const mailOptions = {
        from: `${process.env.EMAIL}`,
        to: `${to_email}`,
        subject: `${process.env.SUBJECT}`,
        text: `${process.env.BODY}`
      };
    console.log(mailOptions)

    transport.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {email_sender}