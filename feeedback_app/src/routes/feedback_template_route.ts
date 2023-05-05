import express from "express";
const router = express.Router();

import { createtemplate, getTemplates, updateTemplate, deleteTemplate } from "../controller/feedback_template_controller";

router.get("/", getTemplates);
router.post("/" , createtemplate);


export default router;