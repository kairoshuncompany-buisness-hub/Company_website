
import React from "react";
import { Smartphone, Globe, Boxes } from "lucide-react";

export default function Services() {
  const cardStyles =
    "bg-[#F8FAFC] rounded-2xl p-10 shadow-sm border border-gray-200 transition-all duration-300 " +
    "hover:-translate-y-3 hover:shadow-[0_0_20px_2px_rgba(0,255,140,0.4)] hover:border-[#00FF8C]";

  return (
    <section className="w-full py-24 bg-white">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-3">Our Services</h2>
        <p className="text-gray-500 text-lg">
          We deliver comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className={cardStyles}>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#0066CC] flex items-center justify-center mb-6">
            <Smartphone className="text-white" size={28} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Custom Apps</h3>
          <p className="text-gray-600 mb-6">
            Native & cross-platform mobile applications built with cutting-edge technology
          </p>

          <button className="px-5 py-2 bg-[#00796B] text-white rounded-lg text-sm font-medium hover:bg-[#00695C] transition">
            Learn More
          </button>
        </div>

        {/* CARD 2 */}
        <div className={cardStyles}>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#0066CC] flex items-center justify-center mb-6">
            <Globe className="text-white" size={28} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Websites</h3>
          <p className="text-gray-600 mb-6">
            Responsive, high-performance websites that drive business growth
          </p>

          <button className="px-5 py-2 bg-[#00796B] text-white rounded-lg text-sm font-medium hover:bg-[#00695C] transition">
            Learn More
          </button>
        </div>

        {/* CARD 3 */}
        <div className={cardStyles}>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#0066CC] flex items-center justify-center mb-6">
            <Boxes className="text-white" size={28} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Software Products</h3>
          <p className="text-gray-600 mb-6">
            Enterprise-grade software solutions tailored to your needs
          </p>

          <button className="px-5 py-2 bg-[#00796B] text-white rounded-lg text-sm font-medium hover:bg-[#00695C] transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
