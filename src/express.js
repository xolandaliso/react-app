const express = require('express');
const sendEmail = require('./mailer');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact Us endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  const subject = `New Contact Us Submission from ${name}`;
  const html = `
    <h1>Contact Us Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  try {
    await sendEmail('xola.ndaliso@gmail.com', subject, html); // Send email to admin
    res.status(200).send('Thank you for contacting us!');
  } catch (error) {
    console.error('Error handling contact form:', error);
    res.status(500).send('Error sending your message.');
  }
});

// Start the server
app.listen(500, () => {
  console.log('Server is running on http://localhost:5000');
});
