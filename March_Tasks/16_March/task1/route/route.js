const controller =require("../controller/controller.js");
const upload = require("../multer/multer")

const express = require("express")

const router = express.Router();

router.post("/create", upload.single('profile'), controller.create);
router.post("/delete", controller.deleteAll);
router.get("/display", controller.display);

module.exports =router;