import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Boxes } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Custom App Development",
    description:
      "Build powerful, scalable mobile applications that engage users and drive business growth. Our expert team delivers native iOS, Android, and cross-platform solutions.",
    features: [
      "Native iOS & Android Development",
      "Cross-platform Solutions (React Native, Flutter)",
      "Progressive Web Apps (PWA)",
      "App Store Optimization",
    ],
    icon: <Smartphone size={28} className="text-white" />,
    gradient: "from-[#1E8FA8] to-[#3A78C2]",
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "Create stunning, high-performance websites that convert visitors into customers. From corporate sites to e-commerce platforms, we build digital experiences that matter.",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "Content Management Systems (CMS)",
      "SEO Optimization",
    ],
    icon: <Globe size={28} className="text-white" />,
    gradient: "from-[#1E8FA8] to-[#3A78C2]",
  },
  {
    id: 3,
    title: "Software Products",
    description:
      "Develop enterprise-grade software solutions tailored to your unique business needs. From CRM systems to custom dashboards, we engineer software that drives efficiency.",
    features: [
      "Custom Enterprise Software",
      "SaaS Product Development",
      "API Development & Integration",
      "Cloud Solutions Architecture",
    ],
    icon: <Boxes size={28} className="text-white" />,
    gradient: "from-[#1E8FA8] to-[#3A78C2]",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-gray-50 py-24">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-3 text-gray-600 text-lg">
          Comprehensive digital solutions designed to transform your business
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-gray-200"
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient}`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-3 mb-4">{service.description}</p>

            {/* Key Features */}
            <ul className="text-gray-700 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 mb-1">
                  <span className="text-green-500">✔</span> {feature}
                </li>
              ))}
            </ul>

            {/* Learn More */}
            <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition font-medium">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
