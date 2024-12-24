import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './css/navbar.css'; // Add your custom styles here
import logo from './images/window.png';
import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">

        {/* logo and brand text */}

        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
          />
          <span>DR's Aluminium +</span>
        </a>

        {/* navbar Links */}
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link enlarged-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link enlarged-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link enlarged-link" to="/services">
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link enlarged-link" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
