// creating the control functions for student databse 

const db = require("../model");
const Student = db.students;
const op = db.Sequelize.Op;

exports.create = (req,res) => {
    console.log(req.file.filename);
    const picname = req.file.filename;
    console.log(typeof(picname));
    const data ={
        name:req.body.name,
        class:req.body.class,
        roll_number:req.body.roll_number,
        subjects:req.body.subjects,
        profile_pic:picname,
    }

    Student.create(data)
        .then(data => {
           return  res.send({data})
        })
        .catch(err => {
           return  res.send({err});
        })

}


exports.display = (req,res) => {
     Student.findAll()
        .then(data => {
           return   res.send({data})
        })
        .catch(err => {
           return res.send({err});
        })
                
}

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