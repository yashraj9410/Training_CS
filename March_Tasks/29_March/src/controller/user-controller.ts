// controller for creating a user and also providing sign in to user 
import User from '../model/user-model'
import {Request, Response} from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// ceating a new user 
export const registerUser =async(req:Request,res:Response) => {
    console.log("in create User");
    
    // if there are no errors 
    const {email,password} = req.body ;
    const hashedpass = await  bcrypt.hash(password,10); // hashing the password

    User.findOne({where:{
        email
    }})
    .then(isPresent => {
        if(isPresent){
            res.status(401).send("User is already present")
        }else{      

             console.log(hashedpass)
             User.create({email,password:hashedpass})
            .then(data => res.status(201).send({data}))
            .catch(err => res.status(400).send("data not added to the database"))
        }
    })
    .catch(err => res.send(err));

}

// creating a login for the user using the jwt accesstoken 
export const signInUser = async(req:Request,res:Response) => {
    const {email,password} = req.body;

    let data = await  User.findOne({where:{email:email}});

    // comparing the password 
    if(data && await bcrypt.compare(password, data.password)){

        // ceating a json web token for the user 
        const accessToken = jwt.sign({
           data:{
            email:data.email,                        // this is the payload 
            id:data.id,
           } 
        },'yash1234',{expiresIn:"10m"});              // "yash1234" is the access token secret 

        res.status(200).json({accessToken});          // sending the acceess token to the user 

    }else{
        res.status(400).send("Invalid email or password")
    }
    
}

export const currentUser = (req:Request,res:Response) => {
    res.send({req});
}