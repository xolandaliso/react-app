import React from 'react';
import '../components/css/landingpage.css'; // Ensure correct path to your CSS file

function AboutUs() {
  return (
    <div className="container services-container">
      <h2 className="services-title">ABOUT US</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Mission</h4>
          <p>
            To provide exceptional quality and innovative metalwork solutions
            that meet and exceed our clients' expectations while fostering
            sustainability and integrity in all our operations.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Vision</h4>
          <p>
            To be the leading provider of premium metalwork solutions in
            Cape Town and beyond, recognized for our dedication to quality,
            reliability, and outstanding customer service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;