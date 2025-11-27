import React from "react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Website",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Fitness App Dashboard",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
      tags: ["Tailwind", "Firebase", "Analytics"],
    },
    {
      title: "Business Analytics Tool",
      category: "Software",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      tags: ["Next.js", "Express", "PostgreSQL"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#3A78C2]">
          Featured Projects
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Showcasing our best work and successful client partnerships
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm mb-3 opacity-90">{project.category}</p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-black/40 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-medium shadow-md">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
