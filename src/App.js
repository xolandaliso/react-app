import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import ServicesPage from './pages/servicespage';
import ContactForm from './components/contactform';
import AboutUs from './components/aboutus';
//import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
