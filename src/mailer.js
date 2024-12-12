const nodemailer = require('nodemailer');
require('dotenv').config(); // To load .env variables

// Create a reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // True for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Function to send email
const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"DR's Aluminium +" <${process.env.EMAIL_USER}>`, // Sender address
      to, // List of recipients
      subject, // Subject line
      html, // HTML body
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
