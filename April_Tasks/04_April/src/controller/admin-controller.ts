//admin-controller

// controller for creating a Admin and also providing sign in to Admin 
import Admin from '../model/admin-model'
import {Request, Response} from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// ceating a new Admin 
export const registerAdmin =async(req:Request,res:Response) => {
    console.log("in create Admin");
    console.log(req.admin);
    
    const {email,password} = req.body ;

    Admin.findOne({where:{
        email
    }})
    .then(isPresent => {
        if(isPresent){
            res.status(401).send("Admin is already present")
        }else{      

             Admin.create({email,password})
            .then(data => res.status(201).send({data}))
            .catch(err => res.status(400).send("data not added to the database"))
        }
    })
    .catch(err => res.send(err));

}

// creating a login for the Admin using the jwt accesstoken 
export const signInAdmin = async(req:Request,res:Response) => {
    const {email,password} = req.body;

    let data = await  Admin.findOne({where:{email:email}});

    // comparing the password 
    if(data && await bcrypt.compare(password, data.password)){

        const accessToken = jwt.sign({
           data:{
            email:data.email,                       
            id:data.id,
           } 
        },'yash1234',{expiresIn:"10m"});              // "yash1234" is the access token secret 

        res.status(200).json({accessToken});           

    }else{
        res.status(401).send("Invalid email or password")
    }
    
}

export const deleteAdmin = (req:Request,res:Response) => {

    const id = req.admin?.id;
    console.log(id)
   
    // check if Admin exists 
    Admin.findByPk(id)
    .then(admin => {
        if(admin){
            Admin.destroy({where:{id}})
            .then(data => res.status(200).send("Admin deleted"))
            .catch(err => res.status(401).send("Admin not deleted"))
        }
    })
    .catch(err => res.status(404).send("No Admin found with the id"));

}