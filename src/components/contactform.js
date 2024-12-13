import React, { useState } from 'react';
import ContactFormPartial from './partials/contactformpartial';
import './css/contactformstyle.css';

// TODO: put cellphone number -- country codes?

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // checking required fields - name, email & message

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = 'Name is required.';

    if (!formData.email.trim()) {

      formErrors.email = 'Email is required.';

    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {

      formErrors.email = 'Email address is invalid.';

    }
    if (!formData.message.trim()) formErrors.message = 'Message is required.';

    return formErrors;

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {

      setErrors(formErrors);
      return;
      
    }
  
    setErrors({});
    setIsSubmitted(true);
    console.log('Form Submitted:', formData);
  
    try {
      // send form data to the backend - express.js
      const response = await fetch('http://localhost:5001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      // log the full response for debugging - 
      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response text:', responseText);
  
      if (response.ok) {

        alert('Thank you for contacting us!');

      } else {

        alert(`Failed to send the message: ${responseText}`);

      }

    } catch (error) {

      console.error('Detailed error submitting the form:', error);
      alert(`An error occurred: ${error.message}`);
    
    } finally {
      // reset the form
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <ContactFormPartial
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isSubmitted={isSubmitted}
    />
  );
}

export default ContactForm;
