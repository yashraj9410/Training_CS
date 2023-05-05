// validations for the schema 
import express from 'express';
import { checkSchema, body, validationResult } from 'express-validator';


// making checkScema for feedback , feedback Template
export const FeedbackTemplateSchema = {
    checkFeedbackTemplate: checkSchema({
      type: {
        isString: true,
        isLength: {
          options: { min: 3 },
          errorMessage: 'Type should be at least 3 characters long'
        },
        errorMessage: 'Please enter a valid type'
      },
      fields: {
        isObject: true,
        errorMessage: 'Fields should be an object'
      },
      requiredFields: {
        isObject: true,
        errorMessage: 'Required fields should be an object'
      },
      qas: {
        isObject: true,
        errorMessage: 'QAs should be an object'
      },
      client_id: {
        isMongoId: true,
        errorMessage: 'Invalid client ID'
      }
    }),
    checkFeedback:checkSchema({
        
    })
  };


// passing the errors to the validateSchema function for any user or profile schema 
export const validateSchema = (req:express.Request,res:express.Response , next: express.NextFunction) => {

    const err = validationResult(req);

    if(!err.isEmpty()){
        return res.status(400).json(err.array());
    }

    next();  // pass the control to the next handler function in the route
}