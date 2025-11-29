
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home"; 
// import Services from "./pages/service"; 
// import Featured_projects from "./pages/Feature_projects";
// import Clients from "./pages/Clients";
// import Footer from "./pages/Footer";
// import Start from "./pages/Start";
// import OurServices from "./Services/ourService";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         {/* Main home layout stays exactly the same */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Home />
//               <Services/>
//               <Featured_projects />
//               <Clients />
//               <Start />
//             </>
//           }
//         />

//         {/* Separate services page */}
//         <Route path="/services" element={<OurServices />} />
//       </Routes>
      
      
//       <Footer />
//     </Router>
//   );
// }




















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
import Contact from "./contacts/Contact";   // ✅ IMPORT CONTACT PAGE

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

        {/* SEPARATE FULL SERVICES PAGE */}
        <Route path="/services" element={<OurServices />} />

        {/* CONTACT PAGE ROUTE */}
        <Route path="/contact" element={<Contact />} />   {/* ✅ FIXED */}
      </Routes>

      {/* Footer always at bottom */}
      <Footer />
    </Router>
  );
}
