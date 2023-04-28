import express from 'express'
import { sendNotification } from '../firebase/noification';

const router = express.Router();

router.post("/", sendNotification); // create task_status table

export default router;