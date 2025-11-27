
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Services from "./pages/service"; 
import Featured_projects from "./pages/Feature_projects";
import Clients from "./pages/Clients";
import Footer from "./pages/Footer";
import OurServices from "./Services/ourService";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main home layout stays exactly the same */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Featured_projects />
              <Clients />
            </>
          }
        />

        {/* Separate services page */}
        <Route path="/services" element={<OurServices />} />
      </Routes>

      <Footer />
    </Router>
  );
}
