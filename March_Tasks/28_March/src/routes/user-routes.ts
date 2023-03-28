// creating user routes for any api requests 
import express from 'express'
import { createUser } from '../controller/user-controller';
import { checkUserSchema } from '../middleware/validator'
const router = express.Router();


// making api requests 
router.post("/",checkUserSchema,createUser);  // validating the req for the user 

export default router 