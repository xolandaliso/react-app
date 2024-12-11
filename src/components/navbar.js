import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css'; // Add your custom styles here
import logo from './images/window.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container">
    {/* Logo and Brand Text */}
    <a className="navbar-brand" href="/">
      <img
        src={logo}
        alt="Logo"
        className="navbar-logo"
      />
      <span>DR's Aluminium +</span>
    </a>

    {/* Navbar Links */}
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
          <a className="nav-link enlarged-link" href="#home">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link enlarged-link" href="#about">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link enlarged-link" href="#services">
            SERVICES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link enlarged-link" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
