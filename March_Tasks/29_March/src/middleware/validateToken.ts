import jwt from 'jsonwebtoken';
import {Request , Response, NextFunction} from 'express'


export const verifyToken = async(req:Request,res:Response, next:NextFunction) => {
    let token:string;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(authHeader && authHeader.toString().startsWith("Bearer")){
        // in the authorisation section the index 0 will contain the bearer and the index 1 contain the accesstoken generated on user login 

        token = authHeader.toString().split(" ")[1];            // converting the array to string 

        const decoded = jwt.verify(token, 'yash1234');  // verifying the generated token using verify 

        if(decoded){

           const data = JSON.stringify(decoded);   // send decoded as a request
           const user_data = JSON.parse(data);
           req.user = user_data.data;        // assigning the data to the req.user
           
           next();
           
        }
        else{
           return res.send("token validation failed for the user ")
        }
    }else{
        return res.status(403).send("invalid token , user not authorised")
    }

}
