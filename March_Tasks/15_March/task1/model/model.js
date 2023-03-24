// creating the model for student using the mongoose schema 
 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const Student = new Schema({
    name:{
        type:String,
        required:true
    },
    profile:{
        data:String,
        contentType:String
    },

 })

 module.exports = mongoose.model("student", Student);   // exporting the created model 

