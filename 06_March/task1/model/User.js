//building the Schema using the schema class in the mongoose 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// creating the schema for the user 
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
});

// calling the model function of mongoose to create a model named user and following the userSchema 
module.exports = mongoose.model("User",userSchema);