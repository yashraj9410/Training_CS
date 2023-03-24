// this is the user router 
const express = require("express");
const router = express.Router();
const {registerUser, loginUser, currentUser} = require("../controller/userController.js");
const validateToken = require("../middleware/validateTokenHandler.js");



router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken,currentUser);      // this s a protected route now it can be accessed only using the access token  

module.exports = router ;