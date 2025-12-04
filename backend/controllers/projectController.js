const Project = require("../models/Project");

// Create project (protected) - supports single file field 'profileImage'
exports.createProject = async (req, res) => {
  try {
    const {
      productName,
      category = "other",
      problemStatement,
      solution,
      technologies, // can be a stringified array or comma-separated string
      liveLink
    } = req.body;

    // parse technologies into array
    let techs = [];
    if (Array.isArray(technologies)) techs = technologies;
    else if (typeof technologies === "string" && technologies.trim()) {
      // allow comma separated or JSON array string
      try {
        const parsed = JSON.parse(technologies);
        if (Array.isArray(parsed)) techs = parsed;
        else techs = technologies.split(",").map(t => t.trim()).filter(Boolean);
      } catch {
        techs = technologies.split(",").map(t => t.trim()).filter(Boolean);
      }
    }

    const projectData = {
      productName,
      category,
      problemStatement,
      solution,
      technologies: techs,
      liveLink,
      createdBy: req.admin ? req.admin._id : undefined
    };

    if (req.file) {
      // store relative path so frontend can request e.g. http://host/uploads/filename
      projectData.profileImage = `/uploads/${req.file.filename}`;
    }

    const project = await Project.create(projectData);
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get list (optionally filter by category and/or technology)
exports.getProjects = async (req, res) => {
  try {
    const { category, tech } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (tech) filter.technologies = { $in: [tech] }; // filter by single technology

    const projects = await Project.find(filter).populate("createdBy", "name email").sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate("createdBy", "name email");
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // only allow admin who created it or any admin? Right now any authenticated admin
    // Update fields if present
    const up = {};
    const fields = ["productName", "category", "problemStatement", "solution", "liveLink"];
    fields.forEach(f => {
      if (req.body[f] !== undefined) up[f] = req.body[f];
    });

    // technologies parsing
    if (req.body.technologies !== undefined) {
      if (Array.isArray(req.body.technologies)) up.technologies = req.body.technologies;
      else if (typeof req.body.technologies === "string") {
        try {
          const parsed = JSON.parse(req.body.technologies);
          up.technologies = Array.isArray(parsed) ? parsed : req.body.technologies.split(",").map(t => t.trim()).filter(Boolean);
        } catch {
          up.technologies = req.body.technologies.split(",").map(t => t.trim()).filter(Boolean);
        }
      }
    }

    if (req.file) {
      up.profileImage = `/uploads/${req.file.filename}`;
    }

    const updated = await Project.findByIdAndUpdate(req.params.id, { $set: up }, { new: true });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
