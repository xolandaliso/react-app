import React, { useState, useEffect } from 'react';

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
    {/* full-screen landing page */}
        <div className="landing-page vh-100 d-flex align-items-center justify-content-center text-center position-relative">

      {/* overlay content */}

      <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row g-4">

          {/* welcome text */}

          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="welcome-text text-wrap text-center">
              <h1 className="display-6 display-md-5 mb-3">
                Welcome to <br />
                DR's Aluminium Plus
              </h1>
            </div>
          </div>

          {/* sub-text */}

          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="sub-text px-3">
              <h4 className="fs-5 lh-base">
                A dynamic company specializing in the manufacturing, installation,
                and repair of high-quality aluminium products. We deliver custom
                solutions for windows, doors, casements, and more, tailored to meet
                the needs of both residential and commercial properties. Our
                experienced team ensures precision in every step—from design and
                production to seamless installations and reliable repairs, providing
                lasting value and exceptional service.
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

  {/* services section */}
  <section id="services-section" className="py-5">
    <div className="container">
      <ServicesList />
    </div>
  </section>

  {/* about us section */}
  <section id="about-us-section" className="py-5">
    <div className="container">
      <AboutUs />
    </div>
  </section>

</div>

  );
}

export default Home;
