// setting up routes for data control

const express = require("express");
const router = express.Router();
const { displayData } = require("../controller/data-controller");


router.get("/display", displayData)

module.exports = router;

// node:13096) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [Bus]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)