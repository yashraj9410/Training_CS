// defining the controller methods 
const student = require("../model/student-model.js")

const displayForm =(req,res)=>{
    res.render("student-form")
}

// adding a new student to database
const add_Student = async(req,res,next)=>{
    console.log(req);
    const { student_name , roll_no ,class_section, subjects } = req.body;

    if(student_name?.trim()==="" && isNaN(roll_no) && class_section?.trim==="" && subjects.length ===0){
        return res.status(422).json({message:"data not valid"})
    }

    let studentData;
    try{ 
        studentData = new student({
            student_name,
            roll_no,
            class_section,
            subjects,
        });
        console.log(studentData);
        studentData = await studentData.save();
    }catch(err){
        return next(err);
     }

     if(!student){
        res.status(500).json({messgae:"data not saved "})
     }

     return res.status(200).json({studentData});
}

exports.add_Student= add_Student;
exports.displayForm = displayForm;