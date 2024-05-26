const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views' ));

// Serve the HTML form
app.get('/find', (req, res) => {
    app.use(express.static(path.join(__dirname, 'css')));
    res.render('g2'); 
});

// Handle form submission
app.post('/send-email', (req, res) => {
  const { name , email , phone , message } = req.body;

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // Your App Password
    } 
  });

  // Set up email data
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your email
    to: process.env.EMAIL_USER, // Recipient's email
    replyTo: email,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`

    
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email successfully sent!');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
