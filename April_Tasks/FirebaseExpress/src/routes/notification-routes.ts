import express from 'express'
import { sendNotification } from '../firebase/noification';

const router = express.Router();

router.post("/notification", sendNotification); // create task_status table

export default router;