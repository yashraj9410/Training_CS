// setting up routes for data control

const express = require("express");
const router = express.Router();
const { displayData, deleteBooking, getDetails } = require("../controller/data-controller");

router.get("/details",getDetails)  //READ
router.post("/display", displayData) //WRITE
router.post("/delete",deleteBooking) // DELETE
module.exports = router;

// node:13096) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [Bus]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)