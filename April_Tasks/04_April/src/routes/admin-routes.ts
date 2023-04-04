// defining routes for the task 
import express from 'express'
import {AdminSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
import { deleteAdmin, registerAdmin, signInAdmin } from '../controller/admin-controller';
//import { read } from 'fs';

const router = express.Router();

router.post("/", AdminSchema,validateSchema, registerAdmin);      // registering user using the transaction controller 
router.post("/login", signInAdmin);
router.delete('/delete', verifyToken,  deleteAdmin)   // proivate route for delete user 


export default router ;
