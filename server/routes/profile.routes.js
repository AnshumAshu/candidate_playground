const express = require("express");
const router = express.Router();


const {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfileById,
  deleteProfileById,
  searchProfiles,
  healthChecker 
} = require("../controllers/profile.controller");

//Health
router.get("/health",healthChecker);

// SEARCH
router.get("/search", searchProfiles);

// CREATE
router.post("/", createProfile);

// READ ALL
router.get("/", getAllProfiles);

// READ ONE
router.get("/:id", getProfileById);

// UPDATE
router.put("/:id", updateProfileById);

// DELETE
router.delete("/:id", deleteProfileById);



module.exports = router;
