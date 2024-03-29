// exporting the booking model 
const db = require("../model");

// importing the sequelized model
const Booking = db.booking;

const Op = db.Sequelize.Op;      // for using the operators of sql


// creating a new booking 

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


// find all the bookings

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

// delete booking 

exports.delete = (req,res) => {
    const phone = req.body.phone;
    console.log(phone)
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