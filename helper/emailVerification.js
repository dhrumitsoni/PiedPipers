/*
    Create a function that return a unique token.
    Create a function that actully sends a mail.
*/
var jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");


function getUniqueToken(data) {
  const token = jwt.sign({ data }, process.env.SECRET_TOKEN_FOR_EMAIL);
  return token;
}

function sendMail(email,token) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "idfaltu15@gmail.com",
    subject: "Example Email",
    text: `
    Dear user,    Here is your email.
  `,
    html: `
    <p>Dear user,</p>    <p>Here is your email.</p>
    <a href="${process.env.ORIGIN_URL}verify/${token}">http://localhost:3000/verify/${token}</a>
  `,
  };
  sgMail.send(msg);
}

module.exports = {
    getUniqueToken,
    sendMail
}