import React from 'react';
import './footer.css';  // If you want to add some custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 DR's Aluminium Plus. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
