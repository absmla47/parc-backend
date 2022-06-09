const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cogebsousse@gmail.com",
    pass: "nridtnyysiwqfzvc",
  },
});

const sendEmail = async (receiver, content, subject) => {
  try {
    let result = await transporter.sendMail({
      from: "cogebsousse@gmail.com", // sender address
      to: receiver, // list of receivers
      subject: subject, // Subject line

      html: `${content}`,
    });
    return result;
  } catch (error) {
    console.log("Error", error.message);
  }
};

module.exports = { sendEmail };
