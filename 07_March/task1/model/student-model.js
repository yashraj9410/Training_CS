// creating the model/ schema for the student 
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let studentSchema = new Schema({
    student_name:{
        type:String,
        required:true
    },
    roll_no:{
        type:Number,
        required:true
    },
    class_section:{
        type:String,
        required:true
    },
    subjects:{
        type:Array
    }
});

module.exports= mongoose.model("student",studentSchema);