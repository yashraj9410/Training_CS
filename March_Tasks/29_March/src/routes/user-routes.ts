import express from 'express'
import {currentUser, registerUser , signInUser} from '../controller/user-controller'
import {UserSchema, ProfileSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'

const router = express.Router();

router.post("/", UserSchema,validateSchema, registerUser);
router.post("/login", signInUser);
router.get("/current", verifyToken, currentUser);

export default router ;
