import React from "react";
import { motion } from "framer-motion";

export default function Start() {
  return (
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
  );
}
