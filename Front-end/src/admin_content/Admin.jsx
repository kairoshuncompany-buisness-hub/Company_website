import React, { useState } from "react";
import axios from "axios";

export default function Admin() {
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

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleTechAdd = () => {
    if (techInput.trim() !== "") {
      setProject({
        ...project,
        technologies: [...project.technologies, techInput.trim()],
      });
      setTechInput("");
    }
  };

  const handleTechRemove = (tech) => {
    setProject({
      ...project,
      technologies: project.technologies.filter((t) => t !== tech),
    });
  };

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

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Admin – Upload Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Name */}
          <div>
            <label className="block font-semibold mb-1">Project Name</label>
            <input
              type="text"
              name="name"
              value={project.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Enter project name"
              required
            />
          </div>

          {/* Category Select */}
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

          {/* Profile Card Image */}
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

          {/* Problem Statement */}
          <div>
            <label className="block font-semibold mb-1">Problem Statement</label>
            <textarea
              name="problem"
              value={project.problem}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              rows="3"
              placeholder="Explain the problem..."
              required
            ></textarea>
          </div>

          {/* Solution */}
          <div>
            <label className="block font-semibold mb-1">Solution Provided</label>
            <textarea
              name="solution"
              value={project.solution}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              rows="3"
              placeholder="Explain the solution..."
              required
            ></textarea>
          </div>

          {/* Technologies Used (Tag Input Style) */}
          <div>
            <label className="block font-semibold mb-1">
              Technologies Used
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                className="border p-3 rounded-lg w-full"
                placeholder="Add a technology (React, Firebase...)"
              />
              <button
                type="button"
                onClick={handleTechAdd}
                className="bg-blue-600 text-white px-4 rounded-lg"
              >
                Add
              </button>
            </div>

            {/* Tags Display */}
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

          {/* Live Link */}
          <div>
            <label className="block font-semibold mb-1">Live Link</label>
            <input
              type="url"
              name="liveLink"
              value={project.liveLink}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="https://example.com"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Upload Project
          </button>
        </form>
      </div>
    </div>
  );
}
