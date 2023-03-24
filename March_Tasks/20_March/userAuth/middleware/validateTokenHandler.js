// this middleware is going to check the access token that does the token matches any user or not 
const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];  //in the header section 0 contain Bearer and 1 contain access_token
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET , (err,decoded)=> {
            if(err){
                res.status(401);
                throw new Error("User is not authorised");
            }

            req.user = decoded.user;   // sending the decoded user info to the req.user (it will be sent to the user controller for current user information  )
            next();
        });

        if(!token){
            res.status(401);
            throw new Error("User is not authorised");
        }
    }
})

module.exports =validateToken;