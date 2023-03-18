// creating the model for student using the mongoose schema 
 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const Student = new Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true,
    },
    roll_no:{
        type:String,
        required:true
    },
    subjects:{
        type:String,
        required:true
    },
    profile:{
        data:String,
        contentType:String
    },

 })

 module.exports = mongoose.model("student", Student);   // exporting the created model 

