const express = require("express");
const { getContacts , createContact, updateContact, deleteContact , getContact } = require("../controller/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();


router.use(validateToken);     // masking all the routes as private using the token
router.get("/", getContacts).post("/",createContact);
router.put("/:id", updateContact).delete("/:id", deleteContact).get("/:id", getContact);



module.exports = router ;