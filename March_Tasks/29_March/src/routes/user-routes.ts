import express from 'express'
import {deleteUser, registerUser , signInUser} from '../controller/user-controller'
import {UserSchema, ProfileSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'

const router = express.Router();

router.post("/", UserSchema,validateSchema, registerUser);
router.post("/login", signInUser);
router.delete('/delete/:id', verifyToken,  deleteUser)

export default router ;
