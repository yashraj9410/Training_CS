// server file 
// config file is for configuring the myswl server 
// setting  up  the web server 
const express = require("express");
const cors = require("cors");       // cors stand for cross origin resource sharing 
const router = require("./route/dbroute.js")
const db = require("./model");
const app =express();
const path =require("path");
db.sequelize.sync();

let corsOptions = {
    origin:"http://localhost:5000"                   // setting up origin to 5000
};

app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.status(200).json({message:"welcome to the page "});
})

app.use("/",router);

// setting up port and running the app 
const PORT = process.env.PORT || 5500
app.listen(PORT,()=>{
    console.log(`Running at port:${PORT}`);         // listening on the port 5500 for any requests 
});