const User = require("../model/userModel");
const path = require('path');
const jwt = require('jsonwebtoken')

const TOKEN_KEY = "Hello Saurav";

const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const userData = await User.findOne({email});
        if(userData){
            // if user exists check password
            if(userData.password === password){
                // Sign and send jwt token in a cookie
                createJwtToken(userData,TOKEN_KEY,res)
                res.redirect('search.html');
            }else{
                return res.send("Password didnt match.")
            }
        }else{
            return res.send("User didnt exist")
        }
    } catch (error) {
        return res.send(`Unable to login : ${error}`)
    }

}

const createJwtToken = (userData,TOKEN_KEY,res)=>{
    const token = jwt.sign(
        { user_id: userData._id },
        TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      res.cookie('jwt',token);
}

module.exports = login