import React from 'react';
import './css/landingpage.css'; // Assuming you'll use custom CSS for styling
import manufact from './images/manufact.jpeg';
import house from './images/house.jpeg';



function AboutUs() {
  return (
    <div className="container services-container">
      <h2 className="services-title">ABOUT US</h2>
      
      {/* Mission Section */}
      <div className="about-section">
        <div className="about-text">
          <h4>Mission</h4>
          <p className="fs-5 fw-normal">
          Our mission is to deliver 
          high-quality aluminium solutions that
          exceed customer expectations, ensuring
          lasting durability, precise craftsmanship,
          and exceptional service. We are committed to
          providing timely and efficient service, building
          long-term relationships with our clients by 
          consistently meeting their needs with integrity and excellence.
          </p>
        </div>
        <div className="about-image">
          <img src={ house } alt="Mission" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-section">
        <div className="about-image">
          <img src={ manufact } alt="Vision" />
        </div>
        <div className="about-text">
          <h4>Vision</h4>
          <p className="fs-5 fw-normal">
          Our vision is to become a trusted and respected
          brand in the aluminium industry, recognized for
          our commitment to innovation, superior craftsmanship,
          and unparalleled customer service. We aspire to lead 
          the market by continuously improving our products and 
          services, setting new standards for quality and reliability
          in every project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
