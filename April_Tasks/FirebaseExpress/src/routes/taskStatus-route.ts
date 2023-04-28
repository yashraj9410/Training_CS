// creating routes for the task status 

import { set_Task_Status } from "../controller/taskStatus-controller";
import express from 'express'

const router = express.Router();

router.post("/", set_Task_Status); // create task_status table

export default router;