// defining routes for the task 
import express from 'express'
import { TaskSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
import { createTask, deleteTask, readTask } from '../controller/task-controller';
//import { read } from 'fs';

const router = express.Router();


// creating the jsdoc swagger comment for the task routes 
/**
 * @swagger
 * tags: Task
 * description: Api to manage tasks apis.
 * /:
 *  post:
 *      security:
 *        - bearerAuth: []
 *      summary: Creating a new task for user.
 *      tags: [Task]
 *      requestBody: 
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Create a CRUD API using sql
 *                userId:
 *                  type: integer
 *                  example: 1
 *      responses:
 *          201:
 *              description: A new task will be created for the user.
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      description:
 *                        type: string
 *                        example: description of the task created
 *                      userId:
 *                        type: integer
 *          400:
 *              description: Bad Request , task not created .
 *          404:
 *              description: No user found for the userId.
 *          403:
 *              description: Action is forbidden , unauthorised.
 *      
 */
router.use(verifyToken);
router.post("/", TaskSchema.checkTask ,validateSchema, createTask);      // registering user using the transaction controller 
router.get("/", readTask);
router.delete("/:id", deleteTask)
export default router ;
