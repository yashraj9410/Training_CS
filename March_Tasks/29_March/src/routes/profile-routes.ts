// creating routes for profile 
import express from 'express'
import {createProfile, deleteProfile, readProfile, updateProfile} from '../controller/profile-controller'
import {UserSchema, ProfileSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
const router = express.Router();

router.use(verifyToken);  // verify the token for the current user when any request is made 

// every request for profile will be private and made with user id only 
router.post("/:id" , ProfileSchema.checkProfile ,  validateSchema , createProfile);
router.get("/:id" , readProfile);
router.put("/:id", ProfileSchema.checkProfile , validateSchema , updateProfile);
router.delete("/:id", deleteProfile);

export default router