const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const dbconnected = require("./config/dbconnected");

dotenv.config();

const PORT = process.env.PORT || 4000;

// connect database
dbconnected();

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
