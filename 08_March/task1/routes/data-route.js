// setting up routes for data control

const express = require("express");
const router = express.Router();
const { displayData, deleteBooking, updatebooking, getDetails } = require("../controller/data-controller");

router.get("/details",getDetails)
router.post("/display", displayData)
router.post("/delete",deleteBooking)
router.post("/update", updatebooking);
module.exports = router;

// node:13096) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [Bus]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)