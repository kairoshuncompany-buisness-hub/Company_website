import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ServiceModal({ isOpen, onClose, service }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50 px-4"
        >
          {/* MODAL BOX */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-3xl border border-gray-200 p-8 overflow-hidden"
          >
            {/* GLOW BORDER */}
            <div className="absolute inset-y-0 right-0 w-[6px] bg-gradient-to-b from-green-400 to-blue-500 rounded-full shadow-lg" />

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-700 hover:text-black transition"
            >
              <X size={26} />
            </button>

            {/* TITLE */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.title}
            </h2>

            {/* CONTENT WRAPPER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* DESCRIPTION + FEATURES */}
              <div>
                <p className="text-gray-700 mb-4">{service.descriptionFull}</p>

                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  All Features
                </h3>

                <ul className="text-gray-700 space-y-2">
                  {service.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TECHNOLOGY STACK + BENEFITS */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Technology Stack
                </h3>

                <div className="flex flex-wrap gap-3 mb-6">
                  {service.stack?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-blue-600 text-white rounded-full shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Key Benefits
                </h3>

                <ul className="text-gray-700 space-y-2">
                  {service.benefits?.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
