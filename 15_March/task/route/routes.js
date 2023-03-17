// setting up the routes for controller functions 
const express =require("express");
const router = express.Router(); 
const upload = require("../middleware/upload.js");
const controller = require("../controller/controller.js");

// router.get("/uploads/:filename", (req,res) => {
//     console.log(req.params.filename);
//     res.sendFile(__dirname,"../uploads"+req.params.filename);
// })

router.get("/display", controller.display);
router.post("/create", upload.single('profile'),controller.create);
router.post("/update", upload.single('updatedprofile'), controller.update);
router.post("/delete", controller.deleteStudent);
router.get("/:id", controller.edit);

module.exports = router ;
