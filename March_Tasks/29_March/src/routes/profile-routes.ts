// creating routes for profile 
import express from 'express'
import {createProfile} from '../controller/profile-controller'
import {UserSchema, ProfileSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
const router = express.Router();

router.use(verifyToken);  // verify the token for the current user when any request is made 
router.post("/" , ProfileSchema.checkProfile ,  validateSchema , createProfile);