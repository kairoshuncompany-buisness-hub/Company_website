
import React from "react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  UserCheck,
  Shield,
  Rocket,
  ThumbsUp,
} from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      desc: "KairosHun was born from a vision to revolutionize digital solutions.",
      position: "left",
    },
    {
      year: "2021",
      title: "First Major Client",
      desc: "Delivered enterprise software for a Fortune 500 company.",
      position: "right",
    },
    {
      year: "2022",
      title: "Expansion",
      desc: "Expanded our team and capabilities across multiple sectors.",
      position: "left",
    },
    {
      year: "2023",
      title: "Innovation Award",
      desc: "Recognized for excellence in software innovation and design.",
      position: "right",
    },
  ];

  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-600">
          Our Journey
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-16">
          From humble beginnings to industry leadership
        </p>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-blue-600 transform -translate-x-1/2"></div>

          <div className="space-y-28">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center w-full ${
                  item.position === "left"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div
                  className={`w-[44%] bg-white shadow-md rounded-2xl p-6 ${
                    item.position === "left" ? "text-left" : "text-right"
                  }`}
                >
                  <p className="text-teal-600 text-sm font-semibold mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full shadow-[0_0_20px_rgba(0,170,255,0.7)]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* MEET OUR FOUNDERS */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center text-blue-600">
            Meet Our Founders
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-16">
            Visionary leaders driving innovation and excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
            {/* Founder 1 */}
            <div className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"
                className="w-32 h-32 object-cover rounded-2xl mx-auto"
              />
              <h3 className="text-2xl font-bold mt-6">Kabir Dharshaan</h3>
              <p className="text-teal-600 font-semibold mt-1">
                CEO & Co-Founder
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Visionary leader with 15+ years in software engineering. Former
                VP at Google, passionate about building technology that matters.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=300&q=80"
                className="w-32 h-32 object-cover rounded-2xl mx-auto"
              />
              <h3 className="text-2xl font-bold mt-6">Rizwan</h3>
              <p className="text-teal-600 font-semibold mt-1">
                CTO & Co-Founder
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Tech innovator specializing in AI and cloud architecture.
                Previously led engineering teams at Amazon and Microsoft.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION VISION VALUES */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center text-blue-600">
            Mission • Vision • Values
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-16">
            What drives KairosHun forward every single day
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-teal-600 to-blue-600 text-white shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mission</h3>
              <p className="text-white/90">
                To engineer intelligent solutions that transform businesses and
                improve lives.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-br from-teal-600 to-blue-600 text-white shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Vision</h3>
              <p className="text-white/90">
                Becoming the global leader in innovative digital solutions.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-br from-teal-600 to-blue-600 text-white shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Values</h3>
              <p className="text-white/90">
                Innovation, Integrity, Excellence, Collaboration & Customer
                Success.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-32 mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-600">
            Why Choose Us?
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-16">
            What makes KairosHun stand out from the rest?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 bg-white shadow-xl rounded-3xl text-center border hover:shadow-2xl transition">
              <Shield size={48} className="mx-auto text-teal-500" />
              <h3 className="text-xl font-bold mt-6">Trusted & Reliable</h3>
              <p className="text-gray-600 mt-3">
                We deliver secure, high-quality solutions trusted by global
                clients.
              </p>
            </div>

            <div className="p-10 bg-white shadow-xl rounded-3xl text-center border hover:shadow-2xl transition">
              <Rocket size={48} className="mx-auto text-teal-500" />
              <h3 className="text-xl font-bold mt-6">Cutting-Edge Technology</h3>
              <p className="text-gray-600 mt-3">
                We adopt the latest technology stacks to ensure top-tier
                performance.
              </p>
            </div>

            <div className="p-10 bg-white shadow-xl rounded-3xl text-center border hover:shadow-2xl transition">
              <ThumbsUp size={48} className="mx-auto text-teal-500" />
              <h3 className="text-xl font-bold mt-6">
                100% Customer Satisfaction
              </h3>
              <p className="text-gray-600 mt-3">
                Our clients love us for our quality, support, and dedication.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/*     ✅ FINAL ACHIEVEMENT SECTION (YOUR IMAGE)    */}
        {/* ------------------------------------------------ */}

        <div className="mt-32 mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-600">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16">

            <div className="bg-white rounded-3xl shadow-md py-12 text-center border hover:shadow-xl transition">
              <Users size={48} className="mx-auto text-teal-500" />
              <p className="text-blue-600 text-xl font-bold mt-4">250+</p>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>

            <div className="bg-white rounded-3xl shadow-md py-12 text-center border hover:shadow-xl transition">
              <Award size={48} className="mx-auto text-teal-500" />
              <p className="text-blue-600 text-xl font-bold mt-4">500+</p>
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>

            <div className="bg-white rounded-3xl shadow-md py-12 text-center border hover:shadow-xl transition">
              <TrendingUp size={48} className="mx-auto text-teal-500" />
              <p className="text-blue-600 text-xl font-bold mt-4">5+</p>
              <p className="text-gray-600 mt-2">Years of Excellence</p>
            </div>

            <div className="bg-white rounded-3xl shadow-md py-12 text-center border hover:shadow-xl transition">
              <UserCheck size={48} className="mx-auto text-teal-500" />
              <p className="text-blue-600 text-xl font-bold mt-4">50+</p>
              <p className="text-gray-600 mt-2">Team Members</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

