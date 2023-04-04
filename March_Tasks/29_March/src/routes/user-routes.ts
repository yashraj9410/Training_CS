import express from 'express'
import {deleteUser, registerUser , signInUser} from '../controller/user-controller';
import { readUser, register } from '../controller/user-transaction-controller';
import {UserSchema, ProfileSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
//import { read } from 'fs';

const router = express.Router();

router.post("/", UserSchema,validateSchema, register);      // registering user using the transaction controller 
router.post("/login", signInUser);
router.delete('/delete', verifyToken,  deleteUser)   // proivate route for delete user 
router.get("/" , readUser)

export default router ;
