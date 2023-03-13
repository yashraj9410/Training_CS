// exporting the student model 
const db = require("../model");

// importing the sequelized model
const Student = db.student;

const Op = db.Sequelize.Op;


// creating a new student 

exports.create =(req,res)=>{
    if(!req.body.name){
        res.status(400).json({message:"name cannot be  empty "});
    }

    const student = {
        name:req.body.name,
        class: req.body.class,
        roll_number:req.body.roll_number,
        subjects:req.body.subjects,
    };
    console.log(student);

    Student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({message:`${err} Some Error occured in creating a new student  `});
        })
}


// find all the students 

exports.findAll =(req,res) => {
    Student.findAll()
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.status(500).send({message:`${err}`});
        })
}

// update student 

exports.update = (req,res) => {
    const id = req.params.id;

    Student.update(req.body,{                          // promise returns true if updated 
        where:{id:id}
    })
    .then(data => {
        res.send({data});
    })
    .catch(err => {
        res.status(500).send({message:`${err}`});
    })
}

// delete student 

exports.delete = (req,res) => {
    const roll_number = req.body.roll_number;
    console.log(roll_number)
    Student.destroy({where:{roll_number}})
    .then(data =>{
        res.send({data});
    })
    .catch(err => {
        res.status(500).send({message:`${err} this is the error`});
    })
}

// deleting all data 

exports.deleteAll = (req,res) => {
    Student.destroy({
        where:{},
        truncate:false
    })
    .then(data =>{
        res.send({data});
    })
    .catch(err =>{
        req.send({message:`${err}`});
    })
    
}