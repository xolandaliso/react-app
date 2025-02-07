import React from 'react';
import './css/landingpage.css';



const Details = () => {
    return (
      <section className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-card">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>138 Shelley Road, Zoo Park, Kraaifontein, Western Cape, South Africa</p>
          </div>
          <hr />
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <p>061 482 8981</p>
          </div>
          <hr />
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>drsalumin@drs-aluminium-plus.co.za</p>
          </div>
          <hr />
          <div className="contact-item">
            <i className="fas fa-globe"></i>
            <p>www.drs-aluminium-plus.co.za</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Details;
  