import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const categories = ["All", "Apps", "Websites", "Software"];

  const projects = [
    {
      id: 1,
      title: "HealthTrack Pro",
      category: "Apps",
      desc: "Comprehensive fitness and wellness tracking application",
      image:
        "https://images.unsplash.com/photo-1579758629936-035be682ca2a?q=80&w=1920",
    },
    {
      id: 2,
      title: "Workspace Planner",
      category: "Software",
      desc: "A productivity management and workspace optimization tool.",
      image:
        "https://images.unsplash.com/photo-1587614382346-4ec71c98d1cc?q=80&w=1920",
    },
    {
      id: 3,
      title: "Analytics Dashboard Pro",
      category: "Websites",
      desc: "Advanced analytics dashboard for business insights.",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1920",
    },
    {
      id: 4,
      title: "Restaurant Manager",
      category: "Software",
      desc: "Smart restaurant reservation and order management system.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920",
    },
    {
      id: 5,
      title: "Freelancer Suite",
      category: "Apps",
      desc: "Project management tool for freelancers and creators.",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1920",
    },
    {
      id: 6,
      title: "Growth Analytics",
      category: "Websites",
      desc: "Insight tracking platform for marketing and business growth.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920",
    },
  ];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Featured Projects
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />

              {/* Text Content */}
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-sm mb-1 opacity-90">{project.category}</p>

                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-sm mt-2 opacity-90 w-64">
                  {project.desc}
                </p>

                <button className="flex items-center mt-4 text-sm font-semibold hover:underline">
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
