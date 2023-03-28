import {checkSchema,body, validationResult} from 'express-validator';  // using the express validator package for schema check 
import express from 'express'

// checking some validations for the user schema and passing the error to the controller 
export const UserSchema = [
    body('email').isEmail(),
    body('password').isLength({min:5}).withMessage('min length 5'),
] 

// checking the schema for profile 
export const ProfileSchema = () => {
    checkSchema({
        name:{
            isString:true,
            isAlpha:true,
            isLength:{
                options:{min:3},
                errorMessage:('name should be of atleast 3 letters')
            },
            errorMessage:("name should only contain letters")
        },
        phone:{
            isLength:{
                options:{min:10,max:10},
                errorMessage:('Phone number should be of 10 digits')
            },
            isMobilePhone:true,
            isNumeric:true
        },
        address:{
            isAlphanumeric:true,
            isLength:{
                options:{min:5, max:100},
                errorMessage:('Please enter compete address')
            },
        },
        userid:{
            isNumeric:true,
            isLength:{
                options:{min:1},
                errorMessage:("enter a valid user id ")
            }
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
