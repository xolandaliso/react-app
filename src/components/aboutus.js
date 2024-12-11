import React from 'react';
import './css/landingpage.css'; // Assuming you'll use custom CSS for styling
import weld from './images/weld.png';


function AboutUs() {
  return (
    <div className="container services-container">
      <h2 className="services-title">ABOUT US</h2>
      
      {/* Mission Section */}
      <div className="about-section">
        <div className="about-text">
          <h4>Mission</h4>
          <p>
            To provide exceptional quality and innovative metalwork solutions
            that meet and exceed our clients' expectations while fostering
            sustainability and integrity in all our operations.
          </p>
        </div>
        <div className="about-image">
          <img src={ weld } alt="Mission" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-section">
        <div className="about-image">
          <img src={ weld } alt="Vision" />
        </div>
        <div className="about-text">
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
