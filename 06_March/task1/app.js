const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const app =express();

app.use(express.json()); // accept the data which is converted to json format 

// callling the route module which contains the controller and user model 
app.use("/users",router);  // use creates a middleware for a path

//connecting to the cloud database
mongoose.connect(
    "mongodb+srv://admin:YudGjAIjdfYy9Q4s@cluster0.wbrza6i.mongodb.net/?retryWrites=true&w=majority"
).then(()=>
    app.listen(5000,() => console.log("connected"))
).catch((err)=> 
    console.log("Got Error",err)
);

// we can all the api using the postman 