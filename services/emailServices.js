const { Resend } = require("resend");


const sendMail = async ({ from, to, subject, text, html }) => {

  const resend = new Resend("re_AjDFC5VT_B5cticF5gPep8ECpt37cnEKf");
  console.log(to);

  try {
    await resend.emails.send({
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
