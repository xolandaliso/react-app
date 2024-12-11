import React from 'react';
import './css/landingpage.css';

function BouncingArrow({ onClick }) {
  return (
    <div className="stacked-arrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="arrow-icon"
      >
        {/* First "V" */}
        <polyline points="6 8 12 14 18 8"></polyline>
        {/* Second "V" */}
        <polyline points="6 12 12 18 18 12"></polyline>
      </svg>
    </div>
  );
}

export default BouncingArrow;

