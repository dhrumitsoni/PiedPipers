const path = require('path');
const User = require('../model/userModel');
// Check if the user is the "admin" 
// If yes then send the index file
// Else send error: Not allowed to view.

const homePlayer = async(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/homePlayer.html'))
}

module.exports = homePlayer