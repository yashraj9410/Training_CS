// creating user routes for any api requests 
import express from 'express'
import { createUser , createProfile , getUserProfiles ,deleteProfile} from '../controller/user-controller';
import {UserSchema, ProfileSchema,validateSchema } from '../middleware/validator'

const router = express.Router();


// making api requests 
router.post("/",UserSchema,validateSchema,createUser);  // validating the req for the user 
router.post("/:id" , ProfileSchema.checkProfile, validateSchema , createProfile );  // creating profile acc. to the user id
router.get("/:userId", getUserProfiles);  // getting profile for any user 
router.delete("/:userid/:profileId",deleteProfile)      // deleting profile for any user 

export default router 