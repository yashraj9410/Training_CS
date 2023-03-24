// this is the error handling module for the project 
const { code } = require("../constants.js");

const errorHandler =(err,req,res,next)=> {
    const statusCode = res.statusCode ? res.statusCode :500;  
    
    console.log(statusCode);
    switch (statusCode) {
        case code.VALIDATION_ERROR:
            res.json({
                title:"VALIDATION ERROR",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
            case code.NOT_FOUND:
                res.json({
                title:"Not Found",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
            case code.UNAUTHORISED:
            res.json({
                title:"Unauthorised entry",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
            case code.FORBIDDEN:
            res.json({
                title:"Forbidden entry ERROR",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
            default:{
                console.log("All Good!");
            }
    }
}


module.exports = errorHandler;