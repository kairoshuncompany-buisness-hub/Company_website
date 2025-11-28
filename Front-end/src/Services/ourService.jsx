
import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "./Servicemodal";
import { Smartphone, Globe, Boxes, Code2, Palette, Zap, Shield } from "lucide-react";

// MAIN SERVICES
const services = [
  {
    id: "app",
    title: "Custom App Development",
    description:
      "Build powerful, scalable mobile applications that engage users and drive business growth.",
    features: [
      "Native iOS & Android Development",
      "Cross-platform Solutions",
      "Progressive Web Apps",
      "App Store Optimization",
    ],
    longDescription:
      "We build modern, high-performance mobile applications for both iOS and Android, ensuring smooth performance and world-class user experience.",
    icon: <Smartphone size={28} className="text-white" />,
    gradient: "from-[#1E8FA8] to-[#3A78C2]",
    tech: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "Node.js"],
    benefits: [
      "High-performance native experience",
      "Scalable backend integration",
      "Clean UI/UX focused designs",
      "Improved customer retention",
    ],
  },
  {
    id: "web",
    title: "Website Development",
    description:
      "Create stunning, high-performance websites that convert visitors into customers.",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "CMS Development",
      "SEO Optimization",
    ],
    longDescription:
      "We build beautiful, user-focused websites that load ultra-fast and help businesses convert visitors into customers.",
    icon: <Globe size={28} className="text-white" />,
    gradient: "from-[#1E8FA8] to-[#3A78C2]",
    tech: ["React", "Next.js", "Vue.js", "WordPress", "Shopify", "Node.js"],
    benefits: [
      "Mobile-first design",
      "SEO optimized architecture",
      "High conversion rate UI",
      "Lightning fast performance",
    ],
  },
  {
    id: "software",
    title: "Software Products",
    description:
      "Enterprise-grade custom software solutions built for maximum efficiency.",
    features: [
      "Custom Enterprise Software",
      "SaaS Development",
      "API Development",
      "Cloud Architecture",
    ],
    longDescription:
      "We create secure, reliable, enterprise-level software systems tailored to your exact business workflow.",
    icon: <Boxes size={28} className="text-white" />,
    gradient: "from-[#1E8FA8] to-[#3A78C2]",
    tech: ["Node.js", "Python", "MongoDB", "AWS", "Docker"],
    benefits: [
      "Automated workflows",
      "Highly scalable system",
      "Bank-level security",
      "Real-time analytics",
    ],
  },
];

// ADDITIONAL SERVICES (unchanged)
const additionalServices = [
  {
    id: 4,
    title: "Technical Consulting",
    description: "Expert guidance on technology strategy, architecture, and best practices.",
    icon: <Code2 size={28} className="text-white" />,
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
    icon: <Palette size={28} className="text-white" />,
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Speed up your applications and improve overall user experience.",
    icon: <Zap size={28} className="text-white" />,
  },
  {
    id: 7,
    title: "Security Audits",
    description: "Comprehensive security assessments and vulnerability testing.",
    icon: <Shield size={28} className="text-white" />,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="w-full bg-gray-50 py-24">

      {/* HEADING */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-3 text-gray-600 text-lg">
          Comprehensive digital solutions designed to transform your business
        </p>
      </div>

      {/* MAIN SERVICE CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + index * 0.2 }}
            whileHover={{
              y: -6,
              boxShadow: "0px 0px 20px rgba(16, 255, 0, 0.4)",
            }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-gray-200"
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient}`}>
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mt-3 mb-4">{service.description}</p>

            <ul className="text-gray-700 mb-6">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 mb-1">
                  <span className="text-green-500">✔</span> {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedService(service)}
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition font-medium"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* ADDITIONAL SERVICES SECTION */}
      <div className="text-center mt-28 mb-10">
        <h2 className="text-4xl font-bold text-blue-600">Additional Services</h2>
        <p className="mt-3 text-gray-600 text-lg">
          Comprehensive support for your entire digital journey
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
        {additionalServices.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + i * 0.15 }}
            whileHover={{
              y: -10,
              boxShadow: "0px 0px 25px rgba(16,255,0,0.55)",
            }}
            className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 mx-auto flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-3">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* MODAL HERE */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}
