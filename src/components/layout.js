import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Layout = () => {
  const [showFooter, setShowFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setShowFooter(scrollHeight > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;