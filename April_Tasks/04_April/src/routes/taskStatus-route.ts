// creating routes for the task status 

import { set_Task_Status } from "../controller/taskStatus-controller";
import express from 'express'
import { verifyToken } from "../middleware/validateToken";

const router = express.Router();

router.use(verifyToken);
router.post("/", set_Task_Status);