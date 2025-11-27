import React from "react";
import { Smartphone, Globe, Boxes } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Custom App Development",
    description:
      "Build powerful, scalable mobile applications that engage users and drive business growth. Our expert team delivers native iOS, Android, and cross-platform solutions.",
    icon: <Smartphone size={28} className="text-white" />,
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "Create stunning, high-performance websites that convert visitors into customers. From corporate sites to e-commerce platforms, we build digital experiences that matter.",
    icon: <Globe size={28} className="text-white" />,
  },
  {
    id: 3,
    title: "Software Products",
    description:
      "Develop enterprise-grade software solutions tailored to your unique business needs. From CRM systems to custom dashboards, we engineer software that drives efficiency.",
    icon: <Boxes size={28} className="text-white" />,
  },
];

export default function OurServices() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-500 to-purple-500 text-white py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-100">
          Comprehensive digital solutions designed to transform your business
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-700">{service.description}</p>

            {/* Optional: Key Features */}
            {/* <p className="mt-4 font-medium">Key Features:</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
