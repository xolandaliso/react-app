import React, { useState } from 'react';
import '../components/css/services.css';
import '../components/css/landingpage.css';

const services = [
  {
    id: 1,
    name: 'Metalworking',
    description: 'High-quality metal products crafted to meet customer specifications.',
    icon: 'bi-gear',  // Example icon for Metalworking
    images: [
      require('../components/images/weld.png'),
      require('../components/images/weld.png'),
      require('../components/images/weld.png'),
    ],
  },
  {
    id: 2,
    name: 'Welding',
    description: 'Precision welding services for various industries.',
    icon: 'bi-wrench',  // Example icon for Welding
    images: [
      require('../components/images/weld.png'),
      require('../components/images/weld.png'),
      require('../components/images/weld.png'),
    ],
  },
  {
    id: 3,
    name: 'Fabrication',
    description: 'Custom fabrication solutions for complex designs.',
    icon: 'bi-file-earmark',  // Example icon for Fabrication
    images: [
      require('../components/images/weld.png'),
      require('../components/images/weld.png'),
      require('../components/images/weld.png'),
    ],
  },

  {
    id: 4,
    name: 'Shower Frames',
    description: 'Custom fabrication solutions for complex designs.',
    icon: 'bi-file-earmark',  // Example icon for Fabrication
    images: [
      require('../components/images/weld.png'),
      require('../components/images/weld.png'),
      require('../components/images/weld.png'),
    ],
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSeeOurWorkClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseGallery = () => {
    setSelectedService(null); // Close the gallery
  };

  return (
    <div className="container services-container">
      <h2 className="services-title">SERVICES RENDERED</h2>

      {/* Display all services in rows and columns */}
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="service-item">
              <div className="service-icon">
                <i className={`bi ${service.icon}`} style={{ fontSize: '40px' }}></i>
              </div>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <button onClick={() => handleSeeOurWorkClick(service)} className="btn btn-secondary">
                See Our Work
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {selectedService && (
        <div className="gallery-modal">
          <div className="modal-content">
            <h3>{selectedService.name} - Our Work</h3>
            <button onClick={handleCloseGallery} className="btn btn-secondary close-btn">
              Close
            </button>
            <div className="gallery-images">
              {selectedService.images.map((image, index) => (
                <img key={index} src={image} alt={`Service work ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
