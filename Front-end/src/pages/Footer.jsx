import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0E13] text-gray-300 pt-20 pb-10">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold">
            <span className="text-teal-300">Kairo</span>
            <span className="text-blue-400">shun</span>
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Engineering the Intelligent Future
          </p>

          <div className="mt-6 space-y-3 text-gray-400">
            <p className="flex items-center gap-2">
              <Mail size={18} /> info@kairoshun.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> San Francisco, CA
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Custom App Development</li>
            <li className="hover:text-white cursor-pointer">Website Development</li>
            <li className="hover:text-white cursor-pointer">Software Products</li>
            <li className="hover:text-white cursor-pointer">UI/UX Design</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for latest updates
          </p>

          <div className="flex bg-[#161A22] rounded-xl overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-transparent text-gray-300 focus:outline-none"
            />
            <button className="px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-gray-700 pt-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2025 Kairoshun. All rights reserved.
        </p>

        <div className="flex gap-4 text-gray-400">
          <Facebook size={22} className="hover:text-white cursor-pointer" />
          <Twitter size={22} className="hover:text-white cursor-pointer" />
          <Linkedin size={22} className="hover:text-white cursor-pointer" />
          <Instagram size={22} className="hover:text-white cursor-pointer" />
        </div>
      </div>

    </footer>
  );
}
