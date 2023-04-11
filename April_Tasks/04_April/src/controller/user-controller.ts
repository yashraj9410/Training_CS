// user-controller 

// controller for creating a user and also providing sign in to user 
import User from '../model/user-model'
import {Request, Response} from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../middleware/connection'
import { QueryTypes } from 'sequelize';
import Task from '../model/task-model';

// ceating a new user 
export const registerUser =async(req:Request,res:Response) => {
    console.log("in create User");
    console.log(req.user);
    // if there are no errors 
    const {email,password} = req.body ;
    //const hashedpass = await  bcrypt.hash(password,10); // hashing the password

    User.findOne({where:{
        email
    }})
    .then(isPresent => {
        if(isPresent){
            res.status(400).send("User is already present")
        }else{      

             //console.log(hashedpass)
             User.create({email,password})
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

        // ceating a json web token for the user verification 
        // jwt has three components that are header , payload and the signature 
        // the header contain the type and the algorithm used for encoding 
        // payload cntains the data we are sending in the token 
        // the signature conatin the accesstoken seret (here we have used 'yashraj1234' as the access token secret )
        
        const accessToken = jwt.sign({
           data:{
            email:data.email,                        // this is the payload 
            id:data.id,
           } 
        },'yash1234',{expiresIn:"10m"});              // "yash1234" is the access token secret 

        res.status(200).json({accessToken});          // sending the acceess token to the user 

    }else{
        res.status(401).send("Invalid email or password")
    }
    
}

export const deleteUser = (req:Request,res:Response) => {

    const id = req.user?.id;
    console.log(id)
   
    // check if user exists 
    User.findByPk(id)
    .then(user => {
        if(user){
            User.destroy({where:{id}})
            .then(data => res.status(200).send("user deleted"))
            .catch(err => res.status(401).send("User not deleted"))
        }
    })
    .catch(err => res.status(404).send("No user found with the id"));

}

// creating custom query using sequelize.query (using raw sql query)

export const getusers = async(req:Request,res:Response) => {
    const users = await db.query("SELECT * from `Users`",{type:QueryTypes.SELECT})
}


// finding user along with the task using the eager loading
// eager loading is the process of fetching data from various models eg the ,mai n model an then asociated model to th emkain models 
// eager loading makes use of single query and gives the whole data of the two asociated tables 

export const userTask = (req:Request, res:Response) => {
    const id = req.user?.id;
    // User.findByPk(id,{include:Task})
    // .then(data => res.send(data))         // only return a single task

    Task.findAll({
        where:{
            userID:id
        },
        include:User
    })
    .then(data => res.status(200).send(data));
}