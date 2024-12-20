import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 

const WhatsAppWidget = () => {
  const phoneNumber = "27715164754"; 
  const message = "Hello! I would like to inquire about your services."; 

  const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;//`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={styles.container}>
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer" style={styles.link}>
        <FaWhatsapp size={40} color="#25D366" />
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000',
  },
  link: {
    textDecoration: 'none',
  },
};

export default WhatsAppWidget;
