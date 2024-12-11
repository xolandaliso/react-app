import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;