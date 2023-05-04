import express from "express";
const router = express.Router();

import { getTemplates } from "../controller/feedback_template_controller";

router.get("/", getTemplates);


export default router;