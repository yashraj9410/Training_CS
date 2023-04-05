// defining routes for the task 
import express from 'express'
import {deleteUser, registerUser , signInUser} from '../controller/user-controller';
import {UserSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
//import { read } from 'fs';

const router = express.Router();

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Returns a created user 
 *     responses:
 *       201: Created User
 *            
 *               
 */
router.post("/", UserSchema,validateSchema, registerUser);      // registering user using the transaction controller 
router.post("/login", signInUser);
router.delete('/delete', verifyToken,  deleteUser)   // proivate route for delete user 


export default router ;
