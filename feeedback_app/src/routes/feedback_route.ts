import express from "express";
const router = express.Router();

import { createFeedback, getFeedback  } from "../controller/feedback-controller";
import { Validate, validateSchema }  from "../middlewares/validations/schema-validations";


router.get("/", getFeedback);

router.post(
    "/", 
    Validate.checkFeedback, 
    validateSchema, 
    createFeedback 
    );

router.put(
    "/", 
    Validate.checkFeedback, 
    validateSchema, 
    createFeedback 
    );    

export default router;