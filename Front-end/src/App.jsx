import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/service"; 
import Featured_projects from "./pages/Feature_projects";
import Clients from "./pages/Clients"
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="">

      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <Home />

      {/* Services Section */}
      <Services />

      <Featured_projects />
      <Clients />
      <Footer />

    </div>
  );
}
