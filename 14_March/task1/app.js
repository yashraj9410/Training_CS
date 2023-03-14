// restaurant api 
const express = require("express");
const tedious =require("tedious");
const path = require("path");
const router = require("./route/restaurantRoutes.js")
const db = require("./model");
db.sequelize.sync();

const app =express();

app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser
app.use(express.urlencoded({extended:true}));

app.use("/", router);

app.listen(2000, () => {
    console.log("Connected ");
});

