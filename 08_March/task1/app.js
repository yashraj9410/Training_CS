// getting the restaurant data 
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/data-route.js");
const path = require("path");
const app=express();


app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser
app.use(express.urlencoded({extended:true}));

app.use("/",router);
mongoose.connect(
    "mongodb+srv://yash:B1PnvPP2EL3KlTZ3@cluster0.n7nnj4z.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    app.listen(4000,()=>{
        console.log("Running")
    })
}).catch((err)=>{
    console.log(err);
});