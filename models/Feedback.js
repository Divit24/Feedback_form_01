const mongoose = require('mongoose');

const feedbacksystem = new mongoose.Schema({
    name: String,
    contactNumber: Number,
    email: String,
    feedback: String,
});

module.exports = mongoose.model('feedback',feedbacksystem);