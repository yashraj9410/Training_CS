import express from "express";
const router = express.Router();

import { createtemplate, getTemplates, updateTemplate, deleteTemplate } from "../controller/feedback_template_controller";
import { Validate , validateSchema }  from "../middlewares/validations/schema-validations";

router.get("/", getTemplates);
router.post("/" , Validate.checkFeedbackTemplate, validateSchema, createtemplate);


export default router;