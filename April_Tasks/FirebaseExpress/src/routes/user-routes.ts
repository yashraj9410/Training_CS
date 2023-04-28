// defining routes for the task 
import express from 'express'
import {deleteUser, registerUser , signInUser, userTask} from '../controller/user-controller';
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
//  *           type: string
//  *           description: User Password
//  */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API's to manage the user register , login , delete
 * /api/user:
 *  post:
 *      summary: Creating a new user in the database.
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: yash@yash.com
 *                password:
 *                  type: string
 *                  example: 12345
 *      responses:
 *          201:
 *              description: Registered User.
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                        example: 1
 *                      email:
 *                        type: string
 *                        example: yash@yash.com
 *                      password:
 *                        type: string
 *                        example: asdasdfasdfkjasbnakjdbqbqawaDSIADKJNNMLMMDEbiBSEde
 *          400:
 *              description: Invalid Request , Invalid email ,password.
 * /api/user/login:
 *  post:
 *      summary: Login for the user .
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: yash@yash.com
 *                password:
 *                  type: string
 *                  example: 12345
 *      responses:
 *          201:
 *              description: Authenticated User , Generated Access Token.
 *          401:
 *              description: Authentication Failed , Invalid Username , password.
 * /api/user/delete:
 *  delete:
 *      security:
 *        - bearerAuth: []
 *      summary: Delete a user .
 *      tags: [User]
 *      responses:
 *          200:
 *              description: Authenticated User , Delete User from the table.
 *          401:
 *              description: Authentication Failed.
 */
router.post("/", UserSchema,validateSchema, registerUser);      // registering user using the transaction controller 
router.post("/login", signInUser);
router.delete('/delete', verifyToken,  deleteUser)   // proivate route for delete user 

router.get("/showtask" ,verifyToken, userTask);      // using the eager loading 

export default router ;
