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
           console.log("Verified",decoded);       // send decoded as a request
           const data = JSON.stringify(decoded);
           const user_data = JSON.parse(data);
            console.log(user_data.data.id);
            //req.user = user_data.data.id;            // assigning the data to the req.body
            next();
        }
        else{
           return res.send("token validation failed for the user ")
        }
    }else{
        return res.status(403).send("invalid token , user not authorised")
    }

}
