const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String, // Hash this in a real app
});

module.exports = mongoose.model('User', userSchema); 