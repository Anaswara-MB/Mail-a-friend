const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'abhishekarun787@gmail.com',
  subject: 'Hello from Nodemailer',
  text: 'This is an email send using Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Email sending error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});