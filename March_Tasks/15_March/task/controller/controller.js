// creating the controller functions for adding to the database
const path = require("path");
const student = require("../model/model.js");
const upload = require("../middleware/upload.js")
const fs = require("fs");

// create a new student data 
const create = async(req,res) => {
    // console.log(req);
    console.log(req.file.path);

    // let img = fs.readFileSync(req.file.path);
    // let encoded_image = img.toString('base64');
    console.log(req.file.filename);
    const data = {
        name:req.body.name,
        class:req.body.class,
        roll_no:req.body.roll_no,
        subjects:req.body.subjects,
        profile:{
            data:req.file.filename,
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
     console.log("Rezuest Rec");
      
    let data =await student.find();
    res.status(200).json({data})
}

// updating a student
const update = async(req,res) => {
    const data = {
        name:req.body.name,
        class:req.body.class,
        roll_no:req.body.roll_no,
        subjects:req.body.subjects,
        profile:{
            data:req.file.filename,
            contentType:req.file.mimetype,
        }
    }

    await student.findOneAndUpdate({roll_no:data.roll_no},{name:data.name,profile:data.profile})

    return res.status(200).send({message:"Updated succeessfully"});
}

// deleting a data 

const deleteStudent = async(req,res) => {
    const id = req.params.id;
        console.log(id);
        await student.deleteOne({_id:id});
        return res.status(200).send({message:"Deletd succeessfully"});

}

// send data ont the edit request 
const edit = async(req,res) => {
    const id = req.params.id;
    console.log(id);
    let data = await student.findById(id);
    res.status(200).json({data});
}

exports.edit =edit;
exports.create =create;
exports.display = display;
exports.update =update;
exports.deleteStudent = deleteStudent;