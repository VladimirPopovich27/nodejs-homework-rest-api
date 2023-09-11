const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
require("dotenv").config();

const { MAILGUN_API_KEY } = process.env;

const sendEmail = async (data) => {
  const mg = mailgun.client({
    username: "vladimirpopovich27@gmail.com",
    key: MAILGUN_API_KEY,
  });

  mg.messages
    .create("sandboxec6f308343334d33ab1e02406392eb68.mailgun.org", {
      from: "Mailgun Sandbox <vladimirpopovich27@gmail.com>",
      to: [data.to],
      subject: "Verify your email",
      text: "Verify your email",
      html: data.html,
    })
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
};

module.exports = sendEmail;


