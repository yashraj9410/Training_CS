// creating the model/ schema for the student 
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let studentSchema = new Schema({
    student_name:{
        type:String,
        require:true
    },
    roll_no:{
        type:Number,
        require:true
    },
    class_section:{
        type:String,
        require:true
    }
});

module.exports= mongoose.model("student",studentSchema);