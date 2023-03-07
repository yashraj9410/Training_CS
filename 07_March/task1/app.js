
const express = require("express");
const mongoose = require("mongoose");
const path =require("path");
const router = require("./routes/student-routes.js");
// const { config } = require("process");
const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:true}));  //body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs
app.set("view engine","ejs");

app.use("/",router); // route to display our data 

mongoose.connect(
    "mongodb+srv://yash:2ENAJsVxhgyS6jRk@cluster0.t4mieby.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    app.listen(2000,() =>{console.log(`running at port `)});
}).catch((err)=>{
    console.log("database connectivity failed",err)
})