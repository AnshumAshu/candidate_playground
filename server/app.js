const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const profileRoutes = require("./routes/profile.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health / root check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Profile routes
app.use("/profile", profileRoutes);

module.exports = app;
