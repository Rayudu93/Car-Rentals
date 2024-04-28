const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const mongoose = require("mongoose");
require("../db"); // Make sure this file establishes the MongoDB connection
const app = express();

const loginPath = path.join(__dirname, "../public/");

const User = require("../models/User");
const Booking = require("../models/booking");
const Feedback = require("../models/feedback");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  if (!username || !email || !password || !confirm_password) {
    return res.status(400).send("All fields are required");
  }

  if (password !== confirm_password) {
    return res.status(400).send("Passwords do not match");
  }

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password.toString();
    const userData = {
      username: username,
      email: email,
      password: hashedPassword,
    };


    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    console.log("Existing user:", existingUser); // Add this line for debugging
    if (existingUser) {
      return res.status(400).send("Email already registered");
    }

    // Create new user
    const newUser = new User(userData);
    await newUser.save();

    res.sendFile(path.join(loginPath, "login.html"));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
});

// Define a route to handle user login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  try {
    // Find user by email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send("User not found. Please register.");
    }

    // Compare passwords
    // const passwordMatch = await bcrypt.compare(password, user.password);
    const passwordMatch = password === user.password;
    if (passwordMatch) {
      return res.sendFile(path.join(loginPath, "home.html"));
    } else {
      return res.status(401).send("Incorrect password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in");
  }
});

app.post("/details", async (req, res) => {
      const bookingData = req.body;
      Booking.create(bookingData);
      res.sendFile(path.join(loginPath, "Success.html"));

});

app.post("/submit-feedback", async (req, res) => {
  const feedbackData = req.body;
  Feedback.create(feedbackData);
  res.sendFile(path.join(loginPath, "SuccessFeed.html"));

});

module.exports = app;