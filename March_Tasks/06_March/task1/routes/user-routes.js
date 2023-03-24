// route for performing CRUD operations on the model using the controller 
const express = require('express');
const { getAllUSers, addUser, updateUser, deleteUser, getUserById } = require("../controller/user-controller");

// calling the router function under the express 
const router = express.Router();

router.get("/", getAllUSers); // read all the users 
router.post("/", addUser);  // create and add anew user 
router.put("/:id",updateUser);  // defining the id for users to update users through the id
router.delete("/:id",deleteUser); // deleting the user
router.get("/:id",getUserById); // getting the user details by its id 
module.exports = router;