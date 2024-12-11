// components/ServicesList.js
import React from 'react';
import '../components/css/landingpage.css';

function ServicesList() {
  return (
    <div id="services-section" className="container services-container">
        <h1 className="services-title">SERVICES RENDERED</h1>
        <div className="row">
            <div className="col-md-3">
            <h4>Aluminium Windows & Doors</h4>
            <p>We provide high-quality aluminium windows and doors for both residential and commercial properties.</p>
            </div>
            <div className="col-md-3">
            <h4>Shower Frames</h4>
            <p>Our custom shower frames are designed to provide both style and functionality for your bathroom.</p>
            </div>
            <div className="col-md-3">
            <h4>Glass Cutting</h4>
            <p>We offer precision glass cutting services for any size and type of glass, tailored to your needs.</p>
            </div>
            <div className="col-md-3">
            <h4>Installations</h4>
            <p>We specialize in the installation of various metal and glass structures, ensuring durability and quality.</p>
            </div>
        </div>
    </div>
  );
}

export default ServicesList;
