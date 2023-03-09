// defining the data model 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookingData = new Schema({
    name:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    table:{
        type:Number,
        required:true
    },
    bookingId:{
        type:Number,
        required:true 
    }
})

module.exports = mongoose.model("user_data", bookingData);