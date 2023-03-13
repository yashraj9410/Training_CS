// creating the route for controller
const student = require("../controller/dbcontroller.js");

let router = require("express").Router();

router.post("/", student.create);
router.get("/find", student.findAll);
router.put("/:id", student.update);
router.post("/delete", student.delete);

module.exports = router;