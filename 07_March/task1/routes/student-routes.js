//creating routes from request and response of methods 
const express = require("express");
const { displayForm, add_Student } = require("../controller/student-controller.js")
const router = express.Router();

router.get("/student-form",displayForm);
router.post("/create",add_Student);

module.exports =router;