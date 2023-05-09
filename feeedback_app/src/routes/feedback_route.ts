import express from "express";
const router = express.Router();

import { createFeedback, deleteFeedback, getFeedback, updateFeedback  } from "../controller/feedback-controller";
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
    updateFeedback 
    );    

router.delete("/:id" , deleteFeedback);

export default router;