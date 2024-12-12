// components/ServicesList.js
import React from 'react';
import '../components/css/landingpage.css';

function ServicesList() {
  return (
    <div id="services-section" className="container services-container">
        <h2 className="services-title">PRODUCTS & SERVICES RENDERED</h2>
        <div className="row">
            <div className="col-md-3">
            <h4 className="fs-4 fw-normal">Manufacturing </h4>
            <p className="fs-6 fw-normal">We specialize in manufacturing high-quality
                aluminium windows, doors, and casements, 
                designed for both residential and commercial properties.
                Crafted from durable materials, our products offer 
                lasting performance, functionality, and style to seamlessly
                enhance your space.</p>
            </div>
            <div className="col-md-3">
            <h4 className="fs-4 fw-normal">Installations</h4>

            <p className="fs-6 fw-normal">We also offer expert installation services 
                to ensure every aluminium window, door, and casement
                fits perfectly. Our experienced team delivers seamless,
                hassle-free installations that enhance the functionality
                and aesthetic of your space. Whether for new construction,
                renovation, or replacement, we provide efficient, reliable
                service with exceptional results.</p>
            </div>
            <div className="col-md-3">
            <h4 className="fs-4 fw-normal">Glasses</h4>
            <p className="fs-6 fw-normal">We offer a range of glass options
                for our aluminium windows and doors,
                including clear, frosted, tempered, and
                tinted glass. Each type is selected to enhance
                functionality, security, and aesthetics, providing
                everything from natural light and privacy to added
                strength and glare reduction.</p>
            </div>
            <div className="col-md-3">
            <h4 className="fs-4 fw-normal">Showers & Frames</h4>
            <p className="fs-6 fw-normal">We offer a range of shower designs,
                including frameless, semi-framed, and 
                fully framed options. Each style is crafted to
                 provide a sleek, modern look while ensuring durability 
                 and functionality to suit your bathroom's design and needs.</p>
            </div>
        </div>
        <div className="row" style={{ marginTop: '50px' }}>
            <div className="col-md-3">
            <h4 className="fs-4 fw-normal">Repairs & Maintenance</h4>
            <p className="fs-6 fw-normal">We offer expert repairs and maintenance
                services, including glass, lock, handle,
                friction stay, and roller replacements. 
                Additionally, we provide realignment and repair
                for aluminium doors, ensuring they function smoothly and efficiently.</p>
            </div>
          
        </div>
    </div>
  );
}

export default ServicesList;
