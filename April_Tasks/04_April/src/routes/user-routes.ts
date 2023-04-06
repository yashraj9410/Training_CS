// defining routes for the task 
import express from 'express'
import {deleteUser, registerUser , signInUser} from '../controller/user-controller';
import {UserSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
//import { read } from 'fs';

const router = express.Router();

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     User:
//  *       type: object
//  *       properties:
//  *         id:
//  *           type: integer
//  *           description: The user ID.
//  *         email:
//  *           type: string
//  *           description: The user's email.
//  *         password:
//  *           type:string
//  *           description:User Password
//  */

/**
 * @swagger
 * /api/user:
 *  post:
 *      description: Creating a new user in the database.
 *      responses:
 *          201:
 *              description: Registered User.
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    example: 1
 *                  email:
 *                    type: string
 *                    example: yash@yash.com
 *                  password:
 *                    type: string
 *                    example: 12345456
 *          400:
 *              description: Invalid Request , Invalid email ,password.
 * /api/user/login:
 *  post:
 *      description: Login for the user .
 *      responses:
 *          201:
 *              description: Authenticated User , Generate Access Token.
 *          401:
 *              description: Authentication Failed.
 * /api/user/delete:
 *  delete:
 *      description: Delete user .
 *      responses:
 *          200:
 *              description: Authenticated User , Delete User from the table.
 *          401:
 *              description: Authentication Failed.
 */
router.post("/", UserSchema,validateSchema, registerUser);      // registering user using the transaction controller 
router.post("/login", signInUser);
router.delete('/delete', verifyToken,  deleteUser)   // proivate route for delete user 


export default router ;
