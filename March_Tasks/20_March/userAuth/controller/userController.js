const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt =  require("jsonwebtoken");
// controller for the user 

//@api/user/register
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} =req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("Input not Valid");
    }

    const user = await  User.findOne({ email });
    console.log(user);
    if(user){
        res.status(400);
        throw new Error("User already exists");
    }

    // creating the hashed password
    const hashedPass = await bcrypt.hash(password,10);
    console.log(hashedPass);

    const newUser =await User.create({username,email,password:hashedPass})
    res.status(200).json(newUser);

});

//@api/user/login
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} =req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("Invalid details");
    }
    
    const user =await User.findOne({email});
    
    // compare the password with hashed password
    if(user && (await bcrypt.compare(password,user.password))){

    // creating a jsonwebtoken using jwt.sign function taking credentials that can be used , private accestoken , expiry time of token

        const accessToken = jwt.sign({                           // generating the acceess token using the jwt sign method 
            user:{
                username:user.username,
                email:user.email,                                // we only want to send these information , we do not want to send the password to the user contorller curent 
                id:user.id,
            },

        },
        process.env.ACCESS_TOKEN_SECRET ,
        { expiresIn: "15m" }
        );
        
         res.status(200).json({ accessToken });

    }else{

        res.status(401)
        throw new Error("email or password is not valid ");
    }

    // using this access token we can access all out access token
})

//@api/user/current
const currentUser = asyncHandler(async(req,res)=>{
    res.status(200).json(req.user);                 // sending the req.user sent by the jwt as a response 
})

exports.registerUser =registerUser;
exports.loginUser =loginUser;
exports.currentUser =currentUser;