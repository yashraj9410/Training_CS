// defining routes for the task 
import express from 'express'
import { TaskSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
import { change_task_status, createTask, deleteTask, getAll, readTask, taskCount } from '../controller/task-controller';

const router = express.Router();


// creating the jsdoc swagger comment for the task routes 
/**
 * @swagger
 * tags:
 *   name: Task
 *   description: Api to manage tasks creatin , display , delete .
 * /api/task:
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
 *                        example: 1
 *          400:
 *              description: Bad Request , task not created .
 *          404:
 *              description: No user found for the userId.
 *          403:
 *              description: Action is forbidden , unauthorised.
 *  get:
 *      security:
 *        - bearerAuth: []
 *      summary:  Displaying the created task to admin/user.
 *      tags: [Task]
 *      responses:
 *          200:
 *              description: Task will be displayed for user/admin.If request is made by the user then only the task corresponding to that user will displayed >If request is made by the admin then all the task created by the admin will be displayed.
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
 *                        example: 1
 *          403:
 *              description: Forbidden action.
 *          404:
 *              description: No user/admin found for the credentials(id,email).
 *          
 * /api/task/{id}:
 *  delete:
 *      security:
 *        - bearerAuth: []
 *      summary: Delete a task using task id.
 *      tags: [Task]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: The Task id.
 *      responses:
 *          200:
 *              description: task Deleted.
 *          403:
 *              description: Unauthorised Admin, Forbidden action.
 *          404:
 *              description: No Task found.
 */

// creating the task routes 
router.use(verifyToken);
router.post("/", TaskSchema.checkTask ,validateSchema, createTask);      // registering user using the transaction controller 
router.get("/", readTask);
router.delete("/:id", deleteTask)
router.put("/:id/complete" , change_task_status)  // update the status of the task 


// getting task counts for any admin using the sequelize.literal , subqueries
router.get("/taskcount" , taskCount);
router.get("/show", getAll);  // using raw queries to display all the tasks to the admin 

// exporting the routes
export default router ;
