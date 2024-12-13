const nodemailer = require('nodemailer');
const SMTPConnection = require('nodemailer/lib/smtp-connection');
require('dotenv').config();  // loading the .env file

// email task - node mailer

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,  // use true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true
  }
});

// send email function

const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"DR's Aluminium + (PTY) LTD." <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Detailed error in sendEmail:', error);
    throw error;
  }
};

module.exports = sendEmail;