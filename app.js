const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path')
const app = express();
const router = require('./Routes/routes')
require('./config/dbConnect')
require('./config/socket')

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname , '/public')));
app.use(cookieParser())
app.use(router);



app.listen(3000,()=>{
    console.log("Server running at 3000...")
})