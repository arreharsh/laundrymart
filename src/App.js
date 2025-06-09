import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


import About from './pages/about';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Error from './pages/error';

import './styles/styles.css';

import Header from './components/header';
import Footer from './components/footer';
import CallbackPopup from './components/CallbackPopup';





function Layout() {
  const location = useLocation();

  const validRoutes = ['/', '/home', '/blog', '/about', '/contact', '/services'];

  const isErrorPage = !validRoutes.includes(location.pathname);
  const [popupOpen, setPopupOpen] = useState(false);


  return (
    <>
      {!isErrorPage && <Header />}

      <Routes>
        <Route path="/" element={<Home onCallbackClick={() => setPopupOpen(true)} />} />
        <Route path="/home" element={<Home onCallbackClick={() => setPopupOpen(true)} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <CallbackPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />

      {!isErrorPage && <Footer onCallbackClick={() => setPopupOpen(true)} />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
