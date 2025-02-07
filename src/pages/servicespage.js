import React, { useState } from 'react';
import '../components/css/services.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const services = [
  {
    id: 1,
    name: 'Manufacturing',
    description: 'Manufacturing high-quality aluminium \
    windows, doors, and casements, designed for both \
    residential and commercial properties.',
    icon: 'bi-gear',  // manufacturin' icon
    images: [
      require('../components/images/manufacturing/manufact1.jpeg'),
      require('../components/images/manufacturing/manufact2.jpeg'),
      require('../components/images/manufacturing/manufact3.jpeg'),
      require('../components/images/manufacturing/manufact8.jpeg'),
      require('../components/images/manufacturing/manufact9.jpeg'),
      require('../components/images/manufacturing/manufact10.jpeg'),
    ],
  },
  {
    id: 2,
    name: 'Installation',
    description: 'Hassle-free installations that enhance the functionality and aesthetic of your space.',
    icon: 'bi-house-door',  
    images: [
      require('../components/images/installation/install6.jpeg'),
      require('../components/images/installation/install3.jpeg'),
      require('../components/images/installation/install12.jpeg'),
      require('../components/images/installation/install13.jpeg'),
      require('../components/images/installation/install9.jpeg'),
      require('../components/images/installation/install8.jpeg'),
      require('../components/images/installation/install10.jpeg'),
      require('../components/images/installation/install11.jpeg'),
      
    ],
  },
  {
    id: 3,
    name: 'Glasses',
    description: 'We offer a range of glass\
                options for our aluminium windows\
                and doors, including clear, frosted,\
                tempered, and tinted glass.',
    icon: 'bi-window', 
    images: [
      require('../components/images/glass/glass1.jpeg'),
      require('../components/images/glass/glass2.jpeg'),
      require('../components/images/glass/glass3.jpeg'),
    ],
  },

  {
    id: 4,
    name: 'Shower Frames',
    description: 'We offer a range of\
                shower designs, including\
                frameless, semi-framed, and fully framed options.',
    icon: 'bi-droplet',  
    images: [
      require('../components/images/shower/shower1.png'),
      require('../components/images/shower/shower2.png'),
      require('../components/images/shower/shower3.png'),
    ],
  },

  {
    id: 5,
    name: 'Repairs & Maintenance',
    description: 'We offer expert repairs\
            and maintenance services, including glass,\
            lock, handle, friction stay, and roller replacements.',
    icon: 'bi-wrench',  
    images: [
      require('../components/images/repairs/repair1.png'),
      require('../components/images/repairs/repair2.png'),
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
  <h2 className="services-title">PRODUCTS & SERVICES RENDERED</h2>

  {/* Display all services in rows and columns with lines separating the columns */}
  <div className="row">
    {services.map((service) => (
      <div
        key={service.id}
        className="col-md-4 mb-4" // Ensure vertical space between rows
        style={{
          borderRight: '1px solid #ccc', // Vertical line between columns
          paddingRight: '20px',
          marginBottom: '20px' // Ensure space between rows
        }}
      >
        <div className="service-icon mb-3">
          <i className={`bi ${service.icon}`} style={{ fontSize: '40px' }}></i>
        </div>
        <h4 className="fs-4 fw-normal">{service.name}</h4>
        <p className="fs-6 fw-normal">{service.description}</p>
        <button
          onClick={() => handleSeeOurWorkClick(service)}
          className="btn"
          style={{ backgroundColor: '#808080', color: 'white', border: 'none' }}
        >
          See Our Work
        </button>
      </div>
    ))}
  </div>

  {/* Gallery Modal */}
  {selectedService && (
  <div className="gallery-modal">
    <div className="modal-content">
      <h3>{selectedService.name} - Our Work</h3>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4"> {/* Creates space between the images */}
          {selectedService.images.map((image, index) => (
            <div key={index} className="col">
              <div className="about-image-services">
                <a href={image} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt={`Service work ${index + 1}`}
                    className="img-fluid"
                    style={{ cursor: 'pointer' }} // Change cursor to pointer
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={handleCloseGallery} 
        className="btn btn-secondary close-btn mt-4" // Move close button down with margin top
        style={{ width: '100%' }}
      >
        Close
      </button>
    </div>
  </div>
)}
</div>

  );
};

export default ServicesPage;
