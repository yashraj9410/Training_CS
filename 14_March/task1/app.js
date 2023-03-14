// restaurant api 
const express = require("express");
const tedious =require("tedious");
const path = require("path");

const app =express();

app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser
app.use(express.urlencoded({extended:true}));

app.get("/" ,() => {
    resizeBy.send({message:"Welcome to page"});
})

app.listen(2000, () => {
    console.log("Connected ");
});