import React from 'react';
import '../css/contactformstyle.css';

const ContactFormPartial = ({ formData, errors, handleChange, handleSubmit, isSubmitted }) => {
  return (
    <div className="contact-page-container">
      {/* Contact Form Container */}
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        {isSubmitted && <p className="success-message">Thank you! We'll get back to you soon.</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <small className="error-text">{errors.message}</small>}
          </div>

          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>

      {/* Map/Location Container */}
      <div className="location-container">
        <h3>Our Location</h3>
        <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.907287972364!2d18.703045!3d-33.8405015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc56af9af8fec3%3A0xfe6b6688bbe5dad5!2s138%20Shelley%20Rd%2C%20Zoo%20Park%2C%20Cape%20Town%2C%207570!5e0!3m2!1sen!2sza!4v1735033868017!5m2!1sen!2sza" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Google Maps Location for 138 Shelley Rd, Zoo Park, Cape Town">
        </iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPartial;
