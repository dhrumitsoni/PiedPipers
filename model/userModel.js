const mongoose = require('mongoose');

const User = new mongoose.model('User',{
    email: String,
    username: String,
    password: String,
    lastSongAdded: Date
})

module.exports = User;