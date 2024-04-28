const mongoose = require("mongoose");

// Define feedback schema
const feedbackSchema = new mongoose.Schema({
    username: String,
    email: String,
    rating: String,
    comments: String, // Use lowercase for property names (e.g., comments)
});

// Create Feedback model
const Feedback = mongoose.model("Feedback", feedbackSchema);

// Export the Feedback model
module.exports = Feedback;
