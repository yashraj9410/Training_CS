import {checkSchema,body, validationResult} from 'express-validator';  // using the express validator package for schema check 
import express from 'express'

// checking some validations for the user schema and passing the error to the controller 
export const AdminSchema = [
    body('email').isEmail(),
    body('password').isLength({min:5}).withMessage('min length 5'),
] 

export const UserSchema = [
    body('email').isEmail(),
    body('password').isLength({min:5}).withMessage('min length 5'),
] 

// checking the schema for task thet is created  
export const TaskSchema = {
    checkTask:checkSchema({
        description:{
            isString:true,
            isLength:{
                options:{min:3},
                errorMessage:('Description should be of atleast 3 letters')
            },
            errorMessage:("Please give a proper description")
        }
    })   
}


// passing the errors to the validateSchema function for any user or profile schema 
export const validateSchema = (req:express.Request,res:express.Response , next: express.NextFunction) => {

    const err = validationResult(req);

    if(!err.isEmpty()){
        return res.status(400).json(err.array());
    }

    next();  // pass the control to the next handler function
}
