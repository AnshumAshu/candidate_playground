const Profile = require("../models/profile.model");



//health checker
const healthChecker = async (req, res) => {
  res.json({ status: "ok" });
};  

//serch profiles
const searchProfiles = async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({ message: "Search query required" });
    }

    const profiles = await Profile.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { education: { $regex: q, $options: "i" } },
        { skills: { $regex: q, $options: "i" } },
        
      ]
    });

    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE profile
const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all profiles with filtering, pagination, and sorting
const getAllProfiles = async (req, res) => {
  try {
    const { skill, page = 1, limit = 5, sort = "-createdAt" } = req.query;

    let filter = {};
    if (skill) {
      filter.skills = { $in: [skill] };
    }

    const profiles = await Profile.find(filter)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Profile.countDocuments(filter);

    res.json({
      total,
      page: Number(page),
      limit: Number(limit),
      data: profiles
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET profile by ID
const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
};

// UPDATE profile by ID
const updateProfileById = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE profile by ID
const deleteProfileById = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json({ message: "Profile deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
};


module.exports = {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfileById,
  deleteProfileById,
  searchProfiles,
  healthChecker
};
