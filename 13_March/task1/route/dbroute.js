// creating the route for controller
const student = require("../controller/dbcontroller.js");

let router = require("express").Router();

router.post("/", student.create);
router.get("/find", student.findAll);
router.post("/update", student.update);
router.post("/delete", student.delete);
router.delete("/deleteAll", student.deleteAll);

module.exports = router;