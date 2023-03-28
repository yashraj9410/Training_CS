// creating user routes for any api requests 
import express from 'express'
import { createUser , createProfile} from '../controller/user-controller';
import {UserSchema,ProfileSchema, validateSchema } from '../middleware/validator'
const router = express.Router();


// making api requests 
router.post("/",UserSchema,validateSchema,createUser);  // validating the req for the user 
router.post("/:id" , ProfileSchema, validateSchema );  // creating profile acc. to the user id
export default router 