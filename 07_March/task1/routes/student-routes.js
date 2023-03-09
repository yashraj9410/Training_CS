//creating routes from request and response of methods 
const express = require("express");
const { displayForm, add_Student, getStudents, updateStudent, deleteStudent} = require("../controller/student-controller.js")
const router = express.Router();

router.get("/student-form",displayForm);
router.get("/display", getStudents);
router.post("/create",add_Student);
router.post("/updateData",updateStudent);
router.post("/delete", deleteStudent);


module.exports =router;