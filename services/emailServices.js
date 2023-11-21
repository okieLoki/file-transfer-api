// const nodemailer = require('nodemailer')
// require('dotenv').config()

// const sendMail = async ({from, to, subject, text, html}) =>{
//     let transporter = nodemailer.createTransport(
//         {
//             host: process.env.SMTP_HOST,
//             port: process.env.SMTP_PORT,
//             secure: false,
//             auth: {
//                 user: process.env.SMTP_LOGIN,
//                 pass: process.env.SMTP_PASS
//             }
//         }
//     )

//     let info = await transporter.sendMail({
//         from: `QRush <${from}>`,
//         to: to,
//         subject: subject,
//         text: text,
//         html: html
//     })
// }

const { Resend } = require("resend");

const resend = new Resend("re_AjDFC5VT_B5cticF5gPep8ECpt37cnEKf");

const sendMail = async ({ from, to, subject, text, html }) => {
  console.log(to);

  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: from,
      subject: subject,
      html: html,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = sendMail;
