
const nodemailer = require("nodemailer");
require('dotenv').config();
var fs = require('fs');

const {
    SENDER_EMAIL_ADDRESS,
    SENDER_EMAIL_PWR,
} = process.env;

const sentMailSale = async (to, cc, bcc, subject, html, attachments, replyTo) => {

    var mailTransporter= nodemailer.createTransport({
        service: 'gmail',
      //  host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        // logger: true,
        // debug: true,
        secureConnection: false,
        auth: {
          user: SENDER_EMAIL_ADDRESS,
          pass: SENDER_EMAIL_PWR
        },
        tls: {
            rejectUnauthorized: true,
        }
      });

    let mailDetails = {
        // from: 'azumaya.server@gmail.com',
        from: 'mailsaleshingolf@gmail.com',
        to: to,
        cc: cc,
        bcc: bcc,
        subject: subject,
        html: html,
        attachments: attachments
    };

    if (replyTo) mailDetails.replyTo = replyTo;

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs', err);
            return "error"
        } else {
            console.log('Email sent successfully');
            if (attachments !== undefined) {
                const { path } = attachments;
                if (path !== `./filereport/error/error_attachment.png`) {
                    fs.unlink(path, function (err) {
                        if (err) throw err;
                    });
                }
            }
        }
    });
}

module.exports = sentMailSale;