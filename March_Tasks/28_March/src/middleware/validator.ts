import {body} from 'express-validator';  // using the express validator package for schema check 

// checking user schema hen creating a schema 
export const checkUserSchema = () => {
    console.log("checking usr schema ");
    console.log(body('email'))
    body('email').isEmail();
    body('password').isStrongPassword({minLength:5});
    // creating the err message if validation fails 
}