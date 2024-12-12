import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
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
  //const navigate = useNavigate(); // Initialize navigate function

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
  {/* Full-Screen Landing Page */}
  <div
    className="landing-page vh-100 d-flex align-items-center justify-content-center text-center position-relative">
    {/* Overlay Content */}
    <div className="container position-absolute top-25 start-50 translate-middle">
      <div className="row">
        {/* Welcome Text */}
        <div className="col-md-6 d-flex align-items-center justify-content-start">
          <div className="welcome-text position-relative bottom-50 translate-middle-y">
            <h1 className="display-3">
              Welcome to <br />
              DR's Aluminium Plus
            </h1>
          </div>
        </div>
        {/* Sub-Text */}
        <div className="col-md-6">
          <div className="sub-text">
            <h4 className="fs-4 fw-normal">
            A dynamic company specializing in the
            manufacturing, installation, and repair
            of high-quality aluminium products. We deliver
            custom solutions for windows, doors, casements,
            and more, tailored to meet the needs of both residential
            and commercial properties. Our experienced team ensures
            precision in every step—from design and production to seamless
            installations and reliable repairs, providing lasting value and
            exceptional service.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
        className="slideshow-container"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <BouncingArrow onClick={handleArrowClick} />
  </div>

  {/* Services Section */}
  <section id="services-section" className="py-5">
    <div className="container">
      <ServicesList />
    </div>
  </section>

  {/* About Us Section */}
  <section id="about-us-section" className="py-5">
    <div className="container">
      <AboutUs />
    </div>
  </section>
</div>

  );
}

export default Home;
