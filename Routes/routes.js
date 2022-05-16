const express = require('express');
const route = express.Router();
const path = require('path');

// Controller
const  registration  = require('../controller/registration');
const login = require('../controller/login')
const addVideoTolist = require('../controller/addVideoToList');
const getNextVideoId = require('../controller/getNextVideoId');
const homePlayer = require('../controller/homePlayer');

// Joi schema
const schemavalidation = require('../middleware/schemaValidate');
const joiUserRegisterSchema = require('../joiSchema/joiUserRegisterSchema');
const joiUserLoginSchema = require('../joiSchema/joiLoginSchema');

// Middleware
const verifyToken = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const getAllQueuedSongs = require('../controller/getAllQueuedSong');


// Home page TV
route.get('/player',verifyToken,adminAuth,homePlayer);

// Moblie user
route.get('/search',verifyToken,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/search.html'))
});

route.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/register.html'))
});

route.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/login.html'))
});

route.post('/register',schemavalidation(joiUserRegisterSchema),registration)

route.post('/login',schemavalidation(joiUserLoginSchema),login);

// Get the song name from the user
route.post('/addVideoToList',verifyToken,addVideoTolist);

// Get next song videoId
route.get('/getNextVideoId',verifyToken,adminAuth,getNextVideoId)

// Get all the songs that are in queue
route.get('/getAllQueuedSongs',verifyToken,getAllQueuedSongs);

// send queued song display file
route.get('/queue',verifyToken,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/queue.html'))
})

module.exports = route;