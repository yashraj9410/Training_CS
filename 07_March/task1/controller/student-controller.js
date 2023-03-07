// defining the controller methods 
const student = require("../model/student-model.js")

const displayForm =(req,res)=>{
    res.render("student-form")
}

// adding a new student to database
const add_Student =(req,res,next)=>{
    const { student_name , roll_no ,class_section } = req.body;

    // if(student_name.trim()==="" && isNaN(roll_no) && class_section.trim===""){
    //     return res.status(422).json({message:"data not valid"})
    // }

    let studentData;
    try{ 
        studentData = new student({
            student_name,
            roll_no,
            class_section
        });
        studentData =  studentData.save();
    }catch(err){
        return next(err);
     }

     if(!student){
        res.status(500).json({messgae:"data not saved "})
     }

     return res.render("student-form");
}

exports.add_Student=add_Student;
exports.displayForm = displayForm;