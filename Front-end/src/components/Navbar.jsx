
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },  
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-gray-100 shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-wide text-gray-900">
            Kairos<span className="text-purple-600">hun</span>
          </h1>
          <p className="text-xs text-gray-600 -mt-1">
            Engineering the Intelligent Future
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-900 text-sm font-medium hover:text-purple-700 transition relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-200 py-4 px-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-left w-full text-gray-900 text-base font-medium py-2 hover:text-purple-700"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="w-full block bg-orange-500 text-white py-2 rounded-xl mt-2 text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
