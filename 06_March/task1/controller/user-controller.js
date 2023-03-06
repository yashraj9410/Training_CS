const User = require("../model/User")

const getAllUSers = async(req,res,next)=>{
    let users;
    try{ 
        users = User.find();  // we can also use specific query to fetch data from database 
    } catch(err){
        return next(err)
    }
    if(!users){
        return res.status(500).json({message: "Internal Serval Error "});
    }

    // if everything is okay then
    return res.status(200).json({message:"OK"});
}

exports.getAllUSers = getAllUSers;