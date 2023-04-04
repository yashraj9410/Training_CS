import express from 'express'
import {deleteUser, registerUser , signInUser} from '../controller/user-controller';
import { register } from '../controller/user-transaction-controller';
import {UserSchema, ProfileSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'

const router = express.Router();

router.post("/", UserSchema,validateSchema, register);
router.post("/login", signInUser);
router.delete('/delete', verifyToken,  deleteUser)   // proivate route for delete user 

export default router ;
