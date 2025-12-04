import React, { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [showUpload, setShowUpload] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  // PROJECT STATE
  const [project, setProject] = useState({
    name: "",
    category: "",
    problem: "",
    solution: "",
    technologies: [],
    liveLink: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [techInput, setTechInput] = useState("");

  // ACHIEVEMENTS STATE
  const [achievements, setAchievements] = useState({
    happyClients: "",
    projectsCompleted: "",
    yearsExperience: "",
    teamMembers: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleAchievementChange = (e) => {
    setAchievements({ ...achievements, [e.target.name]: e.target.value });
  };

  // ADD TECHNOLOGY
  const handleTechAdd = () => {
    if (techInput.trim() !== "") {
      setProject({
        ...project,
        technologies: [...project.technologies, techInput.trim()],
      });
      setTechInput("");
    }
  };

  // REMOVE TECHNOLOGY
  const handleTechRemove = (tech) => {
    setProject({
      ...project,
      technologies: project.technologies.filter((t) => t !== tech),
    });
  };

  // SUBMIT PROJECT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("category", project.category);
    formData.append("problem", project.problem);
    formData.append("solution", project.solution);
    formData.append("liveLink", project.liveLink);
    formData.append("technologies", JSON.stringify(project.technologies));
    formData.append("profileImage", profileImage);

    try {
      const res = await axios.post("/api/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Project uploaded successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    }
  };

  // SUBMIT ACHIEVEMENTS
  const handleAchievementSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/achievements", achievements);
      alert("Achievements updated!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to update achievements");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-40">

      {/* TOP GREETING CARD */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-6 mb-10">
        <img
          src="https://i.pinimg.com/736x/02/d8/c5/02d8c5f8ee138078eff1c675c7d03a58.jpg"
          alt="CEO"
          className="w-20 h-20 rounded-full object-cover shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome, CEO Kabir</h1>
          <p className="text-gray-600 text-lg">Managing your company dashboard</p>
        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* Upload Project */}
        <div
          onClick={() => {
            setShowUpload(!showUpload);
            setShowAchievements(false);
          }}
          className="cursor-pointer bg-white shadow-lg p-6 rounded-2xl hover:scale-105 transition"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">Upload Project</h2>
          <p className="text-gray-600">Add new client projects & case studies</p>
        </div>

        {/* Manage Achievements */}
        <div
          onClick={() => {
            setShowAchievements(!showAchievements);
            setShowUpload(false);
          }}
          className="cursor-pointer bg-white shadow-lg p-6 rounded-2xl hover:scale-105 transition"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">Update Achievements</h2>
          <p className="text-gray-600">Edit homepage stats & counters</p>
        </div>

        {/* Dummy Feature */}
        <div className="bg-white shadow-lg p-6 rounded-2xl hover:scale-105 transition">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Team Members</h2>
          <p className="text-gray-600">Manage your company team profiles</p>
        </div>
      </div>

      {/* UPLOAD PROJECT SECTION */}
      {showUpload && (
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-4xl mx-auto mb-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload New Project</h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block font-semibold mb-1">Project Name</label>
              <input
                type="text"
                name="name"
                value={project.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Category</label>
              <select
                name="category"
                value={project.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              >
                <option value="">Select Category</option>
                <option value="App">App</option>
                <option value="Website">Website</option>
                <option value="Software">Software</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Profile Card Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfileImage(e.target.files[0])}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Problem Statement</label>
              <textarea
                name="problem"
                value={project.problem}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                rows="3"
                required
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold mb-1">Solution Provided</label>
              <textarea
                name="solution"
                value={project.solution}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                rows="3"
                required
              ></textarea>
            </div>

            {/* TECHNOLOGIES */}
            <div>
              <label className="block font-semibold mb-1">Technologies Used</label>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  className="border p-3 rounded-lg w-full"
                />
                <button
                  type="button"
                  onClick={handleTechAdd}
                  className="bg-blue-600 text-white px-4 rounded-lg"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleTechRemove(tech)}
                      className="ml-2 text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Live Link</label>
              <input
                type="url"
                name="liveLink"
                value={project.liveLink}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
            >
              Upload Project
            </button>

          </form>
        </div>
      )}

      {/* ACHIEVEMENTS SECTION */}
      {showAchievements && (
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-3xl mx-auto mb-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Achievements</h1>

          <form onSubmit={handleAchievementSubmit} className="space-y-6">

            <div>
              <label className="block font-semibold mb-1">Happy Clients</label>
              <input
                type="number"
                name="happyClients"
                value={achievements.happyClients}
                onChange={handleAchievementChange}
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Projects Completed</label>
              <input
                type="number"
                name="projectsCompleted"
                value={achievements.projectsCompleted}
                onChange={handleAchievementChange}
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Years of Experience</label>
              <input
                type="number"
                name="yearsExperience"
                value={achievements.yearsExperience}
                onChange={handleAchievementChange}
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Team Members</label>
              <input
                type="number"
                name="teamMembers"
                value={achievements.teamMembers}
                onChange={handleAchievementChange}
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Save Achievements
            </button>

          </form>
        </div>
      )}
    </div>
  );
}
