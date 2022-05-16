const mongoose = require('mongoose');

const url = "mongodb+srv://admin:saurav2001@cluster0.xvzmg.mongodb.net/Canteen_Music?retryWrites=true&w=majority"

mongoose.connect(url)
.then((res)=>{
    console.log("DB Connected...")
})
.catch((err)=>{
    console.log("Failed to connect to db: " + err)
});