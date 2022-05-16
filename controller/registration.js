const User = require("../model/userModel");
const path = require('path');

// Handling post request
const registration = async (req,res)=>{
    const {email,username,password,repeat_password} = req.body;

    // First find if the user already exists
    User.findOne({ email: email },async (err,user)=>{
        // If user exists return the login file without adding user to db
        if(user){
            res.send("User Already exists!");
            // res.sendFile(path.join(__dirname,'../public/login.html'))
        }
        else{
            // Else Add the user to the db if both the passwords match
            if(password === repeat_password){
                const newUser = new User({
                    username: username,
                    email: email,
                    password: password,
                    lastSongAdded: null
                });

                try {
                    await newUser.save();
                } catch (error) {
                    throw "Unable to enter user data to DB!"
                }

                res.sendFile(path.join(__dirname,'../public/login.html'))
            }else{
                throw "Password didn't match!"
            }
        }
    })
}

module.exports = registration