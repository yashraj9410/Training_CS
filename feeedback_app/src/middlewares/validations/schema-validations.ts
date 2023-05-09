// validations for the schema 
import express from 'express';
import { checkSchema, body, validationResult } from 'express-validator';


// making checkScema for feedback , feedback Template
export  const Validate = {
    checkFeedbackTemplate: checkSchema({
      type: {
        isNumeric: true,
        isLength: {
          options: { min: 1 , max:1 },
          errorMessage: 'Type should have a numeric enum value'
        },
        custom: {
          options: (value, { req, location, path }) => {
            if (![1, 2, 3].includes(parseInt(value))) {
              throw new Error('Type should have a value of 1, 2, or 3');
            }
            return true;
        },
      },
        errorMessage: 'Please enter a valid type value'
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
        optional:true,
        isMongoId: true,
        errorMessage: 'Invalid client ID'
      }
    }),
    checkFeedback:checkSchema({
        user_id: {
            optional:true,
            isMongoId: true,
            errorMessage: 'Invalid user ID'
          },
          deliveryagent_id: {
            optional:true,
            isMongoId: true,
            errorMessage: 'Invalid delivery agent ID'
          },
          client_id: {
            optional:true,
            isMongoId: true,
            errorMessage: 'Invalid client ID'
          },
          product_id: {
            optional:true,
            isMongoId: true,
            errorMessage: 'Invalid product ID'
          },
          template_id: {
            optional:true,
            isMongoId: true,
            errorMessage: 'Invalid feedback template ID'
          },
          rating: {
            isNumeric: true,
            isInt: {
              options: { min: 1, max: 5 },
              errorMessage: 'Rating should be between 1 and 5'
            },
            errorMessage: 'Invalid rating'
          },
          comment: {
            optional: true,
            isString: true,
            errorMessage: 'Comment should be a string'
          },
          feedback_type: {
            optional: true,
            isNumeric: true,
            errorMessage: 'Feedback type should be a string'
          },
          feedback_language: {
            optional: true,
            isNumeric: true,
            errorMessage: 'Feedback language should be a string'
          },
          additional_fields: {
            optional: true,
            isObject: true,
            errorMessage: 'Additional fields should be an object'
          },
          qas: {
            optional: true,
            isObject: true,
            errorMessage: 'QAs should be an object'
          }
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