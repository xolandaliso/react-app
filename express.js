const express = require('express');
const sendEmail = require('./mailer');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors()); 

// contact us endpoint

app.post('/contact', async (req, res) => {
    console.log('Received contact form submission:');
    console.log('Request body:', req.body);
  
    const { name, email, message } = req.body;
    
    // validate fields

    if (!name || !email || !message) {

      console.log('validation failed: missing fields');
      return res.status(400).send('All fields are required.');
      
    }
  
    const subject = `Enquiry from : ${name}`;
    const html = `

      <p>Good day; </p>
      <p>A new enquiry has been logged from the DRs Aluminium Plus website</p>
      <p><strong>Details:</strong></p>
      <ul>
          <li><strong>Name:</strong> ${name}</li>
          <br>
          <li><strong>Email:</strong> ${email}</li>
          <br>
          <li><strong>Message:</strong> ${message}</li>
          <br>
      </ul>
    `;

    try {

      console.log('Attempting to send email');
      await sendEmail(email, subject, html);
      console.log('Email sent successfully');
      res.status(200).send('Thank you for contacting us!');

    } catch (error) {

      console.error('Detailed error handling contact form:', error);
      res.status(500).send(`Error sending your message: ${error.message}`);

    }
  });

// fire up the server
const PORT = process.env.PORT || 5001;   // something odd on port 5000 - MacOS

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
