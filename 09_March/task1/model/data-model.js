// defining the data model 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookingData = new Schema({
    name:{
        type:String,
        required:true
    },
    num_people:{
        type:Number,
        required:true,
    },
    time:{
        type:String,
        required:true
    },
    table:{
        type:String,
        required:true
    },
    _id:{
        type:Number,
        required:true
    }
    
})

module.exports = mongoose.model("user_data", bookingData);