const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      links: [String]
    }
  ],
  work: [
    {
      company: String,
      role: String,
      description: String
    }
  ],
  links: {
    github: String,
    linkedin: String,
    portfolio: String
  }
},{ timestamps: true });

module.exports = mongoose.model("Profile", profileSchema);
