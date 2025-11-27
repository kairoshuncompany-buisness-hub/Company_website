import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Boxes } from "lucide-react";

export default function Services() {
  return (
    <div className="w-full py-24 bg-white">
      
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3653D1]">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          We deliver comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0, 200, 180, 0.25)" }}
          className="bg-white rounded-3xl p-10 shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-200"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E8FA8] to-[#3A78C2] flex items-center justify-center mb-6">
            <Smartphone size={32} className="text-white" />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900">Custom Apps</h3>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Native & cross-platform mobile applications built with
            cutting-edge technology
          </p>

          <button className="mt-6 bg-[#0A8A76] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#08725F] transition">
            Learn More
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0, 200, 180, 0.25)" }}
          className="bg-white rounded-3xl p-10 shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-200"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E8FA8] to-[#3A78C2] flex items-center justify-center mb-6">
            <Globe size={32} className="text-white" />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900">Websites</h3>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Responsive, high-performance websites that drive business growth
          </p>

          <button className="mt-6 bg-[#0A8A76] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#08725F] transition">
            Learn More
          </button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0, 200, 180, 0.25)" }}
          className="bg-white rounded-3xl p-10 shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-200"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E8FA8] to-[#3A78C2] flex items-center justify-center mb-6">
            <Boxes size={32} className="text-white" />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900">Software Products</h3>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Enterprise-grade software solutions tailored to your needs
          </p>

          <button className="mt-6 bg-[#0A8A76] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#08725F] transition">
            Learn More
          </button>
        </motion.div>

      </div>
    </div>
  );
}
