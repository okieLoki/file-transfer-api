const { Resend } = require("resend");

const resend = new Resend("re_AjDFC5VT_B5cticF5gPep8ECpt37cnEKf");

const sendMail = async ({ from, to, subject, text, html }) => {
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
