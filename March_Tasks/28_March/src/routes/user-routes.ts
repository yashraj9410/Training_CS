// creating user routes for any api requests 
import express from 'express'
import { createUser } from '../controller/user-controller';
import {UserSchema, validateSchema } from '../middleware/validator'
const router = express.Router();


// making api requests 
router.post("/",UserSchema,validateSchema,createUser);  // validating the req for the user 

export default router 