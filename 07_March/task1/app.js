
const express = require("express");
const mongoose = require("mongoose");
const path =require("path");
const router = require("./routes/student-routes.js");
const { config } = require("process");
const app = express();
app.use(express.json());
app.set("view engine","ejs");
app.use("/",router);

mongoose.connect(
    "mongodb+srv://yash:2ENAJsVxhgyS6jRk@cluster0.t4mieby.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    app.listen(2000,() =>{console.log(`running at port `)});
}).catch((err)=>{
    console.log("database connectivity failed",err)
})