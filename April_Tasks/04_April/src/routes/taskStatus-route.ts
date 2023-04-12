// creating routes for the task status 

import { change_task_status, delete_task_status, get_all_details, set_Task_Status } from "../controller/taskStatus-controller";
import express from 'express'
import { verifyToken } from "../middleware/validateToken";

const router = express.Router();

router.use(verifyToken);   // verifying the token

router.post("/", set_Task_Status); // create status
router.put("/", change_task_status); // update status
router.delete("/:id", delete_task_status); // update status
router.get("/:id" , get_all_details); // get details of task along with ist status and the user it is assigned to 

export default router;