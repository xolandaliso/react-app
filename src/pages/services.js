// pages/Services.js
import React from 'react';
import ServicesList from '../components/serviceslist'; // servicelist import

function Services() {
  return (
    <div>
      {/* <h2 className="text-center my-5">Our Services</h2> */}
      {/* Use the ServicesList component */}
      <ServicesList />
    </div>
  );
}

export default Services;
