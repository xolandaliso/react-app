import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
       <Footer />  /*Footer will be displayed at the bottom of every page*/ 
    </>
  );
};

export default Layout;