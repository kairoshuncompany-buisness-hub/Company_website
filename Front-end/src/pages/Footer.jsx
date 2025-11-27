import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div>
      {/* Project Start Section */}
      <section className="w-full bg-gradient-to-r from-[#1E8FA8] via-[#3A78C2] to-[#9163E8] pt-24 pb-32 text-white relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/10 rounded-full blur-[140px]"></div>
          <div className="absolute top-40 right-40 w-80 h-80 bg-white/5 rounded-full blur-[120px]"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Start Your Project With Kairoshun
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-100"
          >
            Let’s build something amazing together
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-xl shadow-lg">
              Get a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
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

        {/* Divider Line */}
        <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-gray-700 pt-6"></div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Kairoshun. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <Facebook size={22} className="hover:text-white cursor-pointer" />
            <Twitter size={22} className="hover:text-white cursor-pointer" />
            <Linkedin size={22} className="hover:text-white cursor-pointer" />
            <Instagram size={22} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
