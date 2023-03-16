const express = require('express');
const app = express();
const db = require("./model")
const router =require("./route/route");

db.sequelize.sync({force:true});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));
app.use("/uploads",express.static("uploads"));

app.use("/",router);

app.listen(2000,() => {
    console.log(`Running at port 2000`)
});