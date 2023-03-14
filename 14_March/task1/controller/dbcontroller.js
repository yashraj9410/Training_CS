// exporting the student model 
const db = require("../model");

// importing the sequelized model
const Booking = db.booking;

const Op = db.Sequelize.Op;      // for using the operators of sql


// creating a new student 

exports.create =(req,res)=>{
    if(!req.body.name){
        res.status(400).json({message:"name cannot be  empty "});
    }

    const booking = {
        name:req.body.name,
        num_people: req.body.num_people,
        phone:req.body.phone,
        time:req.body.time,
        table:req.body.table,
    };
    console.log(booking);

    Booking.create(booking)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({message:`${err} Some Error occured in creating a new booking  `});
        })
}


// find all the students 

exports.findAll =(req,res) => {
    Booking.findAll()
        .then(data => {
            // console.log(data);
            res.send({data});
        })
        .catch(err => {
            res.status(500).send({message:`${err}`});
        })
}

// update student 

exports.update = (req,res) => {
    const id = req.body.phone;
    console.log(id);
    Booking.update(req.body,{                          // promise returns true if updated 
        where:{phone:id}
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
    const phone = req.body.phone;
    console.log(roll_number)
    Booking.destroy({where:{phone}})
    .then(data =>{
        res.send({data});
    })
    .catch(err => {
        res.status(500).send({message:`${err} this is the error`});
    })
}

// deleting all data 

exports.deleteAll = (req,res) => {
    Booking.destroy({
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