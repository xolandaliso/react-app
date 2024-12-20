import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
//import Navbar from '../components/navbar';
import BouncingArrow from '../components/bouncingarrow';
import ServicesList from '../components/serviceslist'; // Services list import
import AboutUs from '../components/aboutus'; // About Us import
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/landingpage.css';

function Home() {
  const images = [
    require('../components/images/grinder.png'),
    require('../components/images/aluminium.png'),
    require('../components/images/gg.png'),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleArrowClick = () => {
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scrolls smoothly to the section
    }
  };

  return (
    <div>

      <div className="landing-page d-flex flex-column align-items-center justify-content-center text-center">
        <div className="container vh-100 d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="welcome-text custom-title">
                <h1 className="display-2">
                  Welcome to <br />
                  DR's Aluminium Plus
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sub-text custom-subtitle">
                <h3 style={{ fontWeight: 'normal' }}>
                  DR's Aluminium Plus is one of the leading and dedicated metalwork
                  solutions and fabrication services in Cape Town. Our comprehensive
                  services encompass stainless steel, carbon steel, and mild steel
                  fabrication, along with site installation, structural steel works, and
                  fencing solutions.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="slideshow-container"
        style={{
          backgroundImage: url(${images[currentImageIndex]}),
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <BouncingArrow onClick={handleArrowClick} />
      </div>

      {/* Include the ServicesList component */}
      <ServicesList />
      {/* Include the AboutUs component */}
      <AboutUs />
    </div>
  );
}

export default Home;