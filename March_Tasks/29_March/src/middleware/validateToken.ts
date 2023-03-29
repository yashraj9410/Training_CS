import jwt from 'jsonwebtoken';
import {Request , Response, NextFunction} from 'express'
import { error } from 'console';

export const verifyToken = async(req:Request,res:Response, next:NextFunction) => {
    let token:string;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(authHeader && authHeader.toString().startsWith("Bearer")){
        token = authHeader.toString().split(" ")[1];
        console.log(token);

        const decoded = jwt.verify(token, 'yash1234');

        if(decoded){
           console.log(decoded);
        //    req = decoded
        next();
        }
        else{
            res.send("token validation failed")
        }
    }else{
        res.send("invalid token ")
    }

}
