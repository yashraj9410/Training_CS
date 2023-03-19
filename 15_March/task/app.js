
const express = require('express')
const mongoose = require("mongoose");
const router = require("./route/routes");
const path = require("path");
const multer = require("multer");             // provides middleware for uploading images 
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname , "public")))
app.use('/uploads', express.static('uploads'));          // midddleware to render the images

app.use("/", router);  // creating the middle ware for routes and controller for get and post request 





// connecting the database running the port
// Database Name :- Practice
mongoose.connect(
    "mongodb+srv://yash:1234@cluster0.kk6e0c7.mongodb.net/?retryWrites=true&w=majority"
).then(()=> {
    app.listen(port,()=>{
        console.log(`Running at ${port}`);
    })
}).catch(err => {
    console.log(err);
});

// facing problem in router when reloading the server 