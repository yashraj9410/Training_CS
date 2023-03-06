const express = require("express");
const mongoose = require("mongoose");
const app =express();

mongoose.connect(
    "mongodb+srv://admin:YudGjAIjdfYy9Q4s@cluster0.wbrza6i.mongodb.net/?retryWrites=true&w=majority"
).then(()=>
    app.listen(5000,() => console.log("connected"))
).catch((err)=> 
    console.log("Got Error",err)
);