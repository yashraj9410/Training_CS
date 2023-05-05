import express from "express";
const router = express.Router();

import { createtemplate, getTemplates, updateTemplate, deleteTemplate } from "../controller/feedback_template_controller";
import { Validate }  from "../middlewares/validations/schema-validations";

router.get("/", getTemplates);
router.post("/" , Validate.checkFeedbackTemplate, createtemplate);


export default router;