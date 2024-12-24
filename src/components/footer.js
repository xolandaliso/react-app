import React from 'react';
import './footer.css'; 
import { Link } from 'react-router';

import { FaMapMarkerAlt, FaGlobe, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p style={{ color: 'goldenrod' }}>&copy; 2024 DR's Aluminium Plus. All Rights Reserved.</p>

        {/* Address and Website */}
        <div className="contact-info">
          <span style={{ color: 'goldenrod' }}>
            <FaMapMarkerAlt /> 138 Shelley Road, Zoo Park, Kraaifontein, Western Cape
          </span>
          <span> | </span>
          <span style={{ color: 'goldenrod' }}>
            <FaGlobe /> www.drs-aluminium-plus.co.za
          </span>
        </div>

        {/* Phone and Email */}
        <div className="contact-details">
          <span style={{ color: 'goldenrod' }}>
            <FaPhoneAlt /> +27 61 482 8981
          </span>
          <span> | </span>
          <span style={{ color: 'goldenrod' }}>
            <FaEnvelope /> drsalumin@drs-aluminium-plus.co.za
          </span>
        </div>
        <ul className="footer-links">
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-services">Terms of Service</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
