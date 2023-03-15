// creating the controller functions for adding to the database
const path = require("path");
const student = require("../model/model.js");
const upload = require("../middleware/upload.js")
const fs = require("fs");

// create a new student data 
const create = async(req,res) => {
    console.log(req.body);

    const data = {
        name:req.body.name,
        profile:{
            data:fs.readFileSync(path.join("C:/Users/YashRaj/Documents/GitHub/Training_CS/15_March/task1/uploads/" + req.file.filename)),
            contentType:'image/png',
        }
    }

    if(!data.profile && data.name?.trim()==""){
        res.status(500).send({message:"Invalid Data or Mising Data "});
    }

    await student.create(data)
    .then(data => {
        console.log
        res.status(200).send({message:`${req.file.filename} Data Submitted Successfully`});
    })
    .catch(err => {
        res.send({message:err})
    })
    
}

// read data from the table 

const display = async(req,res) => {


    let data =await student.find();
    res.status(200).json({data})
}

exports.create =create;
exports.display = display;