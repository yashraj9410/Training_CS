// setting up the routes for controller functions 
const express =require("express");
const router = express.Router(); 
const upload = require("../middleware/upload.js");
const controller = require("../controller/controller.js");

router.get("/display", controller.display);
router.post("/create", upload.single('profile'),controller.create);

module.exports = router ;
