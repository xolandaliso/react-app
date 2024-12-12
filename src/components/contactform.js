import React, { useState } from 'react';
import ContactFormPartial from './partials/contactformpartial';
import './css/contactformstyle.css';

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
        // Send form data to the backend
        const response = await fetch('http://localhost:3000/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          alert('Thank you for contacting us!');
        } else {
          alert('Failed to send the message.');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('An error occurred. Please try again later.');
      }

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
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
