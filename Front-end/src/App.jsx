
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Services from "./pages/service"; 
import Featured_projects from "./pages/Feature_projects";
import Clients from "./pages/Clients";
import Footer from "./pages/Footer";
import Start from "./pages/Start";

import OurServices from "./Services/ourService";
import Contact from "./contacts/Contact";    
import Portfolio from "./Portfolio_content/portfolio";  
import About from "./about_content/about";  

export default function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>

        {/* HOME PAGE WITH SECTIONS */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Services />
              <Featured_projects />
              <Clients />
              <Start />
            </>
          } 
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />   {/* ✅ NEW */}

        {/* FULL SERVICES PAGE */}
        <Route path="/services" element={<OurServices />} />

        {/* PORTFOLIO PAGE */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* Footer always at bottom */}
      <Footer />
    </Router>
  );
}
