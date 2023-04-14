// creating routes for the task status 

import { set_Task_Status } from "../controller/taskStatus-controller";
import express from 'express'
import { verifyToken } from "../middleware/validateToken";

const router = express.Router();

router.post("/", set_Task_Status); // create status

export default router;