// creating the controller functions for adding to the database
const path = require("path");
const student = require("../model/model.js");
const upload = require("../middleware/upload.js")
const fs = require("fs");

// create a new student data 
const create = async(req,res) => {
    // console.log(req);
    console.log(req.file.path);

    let img = fs.readFileSync(req.file.path);
    let encoded_image = img.toString('base64');

    const data = {
        name:req.body.name,
        profile:{
            data:new Buffer.from(encoded_image,'base64'),
            contentType:req.file.mimetype,
        }
    }
    console.log(data.profile.data);
    console.log(req.file.mimetype)

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