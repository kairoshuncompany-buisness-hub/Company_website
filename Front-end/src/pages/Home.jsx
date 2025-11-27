import React from "react";
import { Smartphone, Globe, Boxes } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1E8FA8] via-[#3A78C2] to-[#6A67D5] text-white relative overflow-hidden">

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white bg-opacity-30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Kairoshun — Custom Apps, Websites & <br /> Software Products
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-slate-100"
        >
          Building intelligent solutions that empower your business
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-medium text-white shadow-lg"
          >
            Explore Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
            className="border border-white px-6 py-3 rounded-xl font-medium backdrop-blur-sm transition"
          >
            Get a Quote
          </motion.button>
        </motion.div>

        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.18)" }}
            className="bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 
                       rounded-2xl p-8 text-center shadow-xl cursor-pointer transition"
          >
            <Smartphone size={45} className="mx-auto mb-4 text-white" />
            <h2 className="text-2xl font-semibold">Custom Apps</h2>
            <p className="text-sm mt-2 text-slate-200">
              Native & cross-platform mobile applications built with cutting-edge technology
            </p>
            <a className="mt-4 inline-block text-white font-medium hover:underline">Learn More →</a>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.18)" }}
            className="bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 
                       rounded-2xl p-8 text-center shadow-xl cursor-pointer transition"
          >
            <Globe size={45} className="mx-auto mb-4 text-white" />
            <h2 className="text-2xl font-semibold">Websites</h2>
            <p className="text-sm mt-2 text-slate-200">
              Responsive, high-performance websites that drive business growth
            </p>
            <a className="mt-4 inline-block text-white font-medium hover:underline">Learn More →</a>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.18)" }}
            className="bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 
                       rounded-2xl p-8 text-center shadow-xl cursor-pointer transition"
          >
            <Boxes size={45} className="mx-auto mb-4 text-white" />
            <h2 className="text-2xl font-semibold">Software Products</h2>
            <p className="text-sm mt-2 text-slate-200">
              Enterprise-grade software solutions tailored to your needs
            </p>
            <a className="mt-4 inline-block text-white font-medium hover:underline">Learn More →</a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
