// route for performing CRUD operations on the model using the controller 
const express = require('express');
const { getAllUSers } = require("../controller/user-controller");

// calling the router function under the express 
const router = express.Router();

router.get("/", getAllUSers);

module.exports = router;