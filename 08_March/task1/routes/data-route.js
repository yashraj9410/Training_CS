// setting up routes for data control

const express = require("express");
const router = express.Router();
const { displayFile } = require("../controller/data-controller");


router.get("/display", displayFile)

module.exports = router;