// defining routes for the task 
import express from 'express'
import { TaskSchema,validateSchema } from '../middleware/schema-validator'
import {verifyToken} from '../middleware/validateToken'
import { createTask, deleteTask, readTask } from '../controller/task-controller';
//import { read } from 'fs';

const router = express.Router();

router.use(verifyToken);
router.post("/", TaskSchema.checkTask ,validateSchema, createTask);      // registering user using the transaction controller 
router.get("/", readTask);
router.delete("/:id", deleteTask)
export default router ;
