var nodemailer = require('nodemailer');
const creds = require('./MailData');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log('Server is ready to take messages');
  }
});

const sendMail = {
  sendMail : async(req, res, next) => {
    const {mail, subject, message, response} = req.body;

    let content = `Name: Bangoo \n Email: ${mail} \n Subject of your request: ${subject} \n Your message to us: ${message} \n Our response: ${response}`;

    console.log(mail, subject, message, response);

    const mailContent = {
        from: creds.USER,
        to: mail,  //Change to email address that you want to receive messages on
        subject: 'Response to your contact request',
        text: content
    }

    transporter.sendMail(mailContent, (err, data) => {
        if (err) {
            console.log(err.message)
          res.json({
            msg: 'fail'
          })
        } else {
          res.json({
            msg: 'success'
          })
        }
      })
  }
}

module.exports = sendMail;