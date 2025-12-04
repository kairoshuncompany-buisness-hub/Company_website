
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0CA6E8] to-[#3A78C2] mb-10">
            Contact Information
          </h2>

          {/* Email */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-5 mb-6">
            <div className="bg-[#E8F6FF] text-[#0CA6E8] p-4 rounded-2xl">
              <Mail size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600 text-sm">kairoshun.company@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-5 mb-6">
            <div className="bg-[#E8F6FF] text-[#0CA6E8] p-4 rounded-2xl">
              <Phone size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600 text-sm">+91 93423 24874</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-5 mb-6">
            <div className="bg-[#E8F6FF] text-[#0CA6E8] p-4 rounded-2xl">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600 text-sm">
                Gayathri Nagar, 2nd Street, Koothur, No.1 Tolgate, Trichy, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=No.1%20Tolgate%20Trichy&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 border-0"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0CA6E8] to-[#3A78C2] mb-10">
            Send us a Message
          </h2>

          <form className="space-y-6">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Full Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
                />
              </div>
            </div>

            {/* Row 2 — UPDATED PHONE DESIGN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Phone Number *</label>
                
                <div className="flex mt-2 gap-3 items-center">

                  {/* SMALL Country Code Selector */}
                  <select
                    className="px-2 py-2 w-24 text-sm rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-300 outline-none"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                  </select>

                  {/* LARGE Phone Input Box */}
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full px-5 py-4 text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
                  />

                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Project Type *</label>
                <select className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 outline-none">
                  <option>Select project type</option>
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>Branding</option>
                  <option>AI Automation</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Project Budget *</label>
                <select className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 outline-none">
                  <option>Select budget range</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FF6A3D] hover:bg-[#ff5a24] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* CONNECT WITH US */}
      <div className="w-full text-center mt-24">
        <h2 className="text-4xl font-bold text-[#3A57E8] mb-4">Connect With Us</h2>
        <p className="text-gray-600 mb-10">Follow us on social media for updates and insights</p>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="bg-[#0077B5] text-white px-10 py-4 rounded-xl text-lg font-medium shadow-md hover:opacity-90 transition-all">
            <div className="flex items-center gap-2"><FaLinkedin size={22}/> LinkedIn</div>
          </a>

          <a href="#" className="bg-[#1DA1F2] text-white px-10 py-4 rounded-xl text-lg font-medium shadow-md hover:opacity-90 transition-all">
            <div className="flex items-center gap-2"><FaTwitter size={22}/> Twitter</div>
          </a>

          <a href="#" className="bg-[#4267B2] text-white px-10 py-4 rounded-xl text-lg font-medium shadow-md hover:opacity-90 transition-all">
            <div className="flex items-center gap-2"><FaFacebook size={22}/> Facebook</div>
          </a>

          <a href="#" className="bg-[#E4405F] text-white px-10 py-4 rounded-xl text-lg font-medium shadow-md hover:opacity-90 transition-all">
            <div className="flex items-center gap-2"><FaInstagram size={22}/> Instagram</div>
          </a>
        </div>
      </div>
    </div>
  );
}
