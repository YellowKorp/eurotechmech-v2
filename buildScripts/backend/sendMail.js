/**
 * Created by taha on 8/27/17.
 */
import nodemailer from 'nodemailer';
/* eslint-disable no-console */
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', //'smtp.zoho.eu',// 'smtp.gmail.com'
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: process.env.etmEmail,
    pass: process.env.etmPWD
  }
});

export function sendMail(body) {
  // setup email data with unicode symbols
  let mailOptions = {
    from: '<'+body.email+'>', // sender address
    to: process.env.etmTo, // list of receivers
    subject: 'EuroTechMech Contact Form', // Subject line
    text: "Name : " + body.name + "\nemail : " + body.email + '\n Phone: '+ body.phone+ '\n Message: '+ body.message, // plain text body
    //html: '<b>Hello world ?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}
