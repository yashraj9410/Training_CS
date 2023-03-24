const booking = require("../controller/dbcontroller.js");

const router = require("express").Router();

router.post("/create", booking.create);
router.get("/display" , booking.findAll);
router.post("/delete", booking.delete);

module.exports = router;