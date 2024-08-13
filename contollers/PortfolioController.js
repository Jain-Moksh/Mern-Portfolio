const nodemailer = require("nodemailer");
const brevoTransport = require("nodemailer-brevo-transport");

// creating transport function to connect with brevo account
const transporter = nodemailer.createTransport(
  new brevoTransport({
    auth: {
      api_key: process.env.API_BREVO,
    },
  })
);

// controller
const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Fill All The Details",
      });
    }

    // email format/matter
    transporter.sendMail({
      to: "mokshjain.10a.m@gmail.com",
      from: "moksh.10a.m@gmail.com",
      subject: "Regarding Portfolio app",
      html: `
        <h5>Detail Information</h5>
        <ul>
        <li><p>Name : ${name}</p></li> 
        <li><p>Email : ${email}</p></li>
        <li><p>Message : ${msg}</p></li>
        </ul>
        `,
    });

    // success condition
    return res.status(200).send({
      success: true,
      message: "Your message sent successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
