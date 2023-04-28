// defining routes for the task 
import express from 'express'
import {AdminSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
import { deleteAdmin, registerAdmin, signInAdmin } from '../controller/admin-controller';
//import { read } from 'fs';

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: API's to manage the admin register , login , delete
 * /api/admin:
 *  post:
 *      summary: Creating a new admin in the database.
 *      tags: [Admin]
 *      requestBody:
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: admin@admin.com
 *                password:
 *                  type: string
 *                  example: 12345
 *      responses:
 *          201:
 *              description: Registered Admin.
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
 *                        example: admin@admin.com
 *                      password:
 *                        type: string
 *                        example: asdasdfasdfkjasbnakjdbqbqawaDSIADKJNNMLMMDEbiBSEde
 *          400:
 *              description: Invalid Request , Invalid email ,password.
 * /api/admin/login:
 *  post:
 *      summary: Login for the admin .
 *      tags: [Admin]
 *      requestBody:
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: admin@admin.com
 *                password:
 *                  type: string
 *                  example: 12345
 *      responses:
 *          201:
 *              description: Authenticated Admin , Generated Access Token.
 *          401:
 *              description: Authentication Failed , Invalid Username , password.
 * /api/admin/delete:
 *  delete:
 *      security:
 *        - bearerAuth: []
 *      summary: Delete a admin .
 *      tags: [Admin]
 *      responses:
 *          200:
 *              description: Authenticated Admin , Delete Admin from the table.
 *          401:
 *              description: Authentication Failed.
 */
router.post("/", AdminSchema,validateSchema, registerAdmin);      // registering admin using the admin controller 
router.post("/login", signInAdmin);
router.delete('/delete', verifyToken,  deleteAdmin)   // private route for delete user 


export default router ;
