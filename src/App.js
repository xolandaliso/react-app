import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import ServicesPage from './pages/servicespage';
import ContactForm from './components/contactform';
import AboutUs from './components/aboutus';
import PrivacyPolicy from './components/privacypolicy';
import TermsOfService from './components/termsofservice';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-services" element={<TermsOfService />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
