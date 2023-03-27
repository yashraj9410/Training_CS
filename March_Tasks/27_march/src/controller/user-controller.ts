// creating the controller methods for the model i.e for querying 
import User from '../model/user-model'
import express, {Request , Response} from 'express';


// creating a new user i the database 
export const createUser = (req:Request,res:Response) => {
    const data = req.body ;
    if(!data || !data.name || !data.age){
       return  res.status(400).send("Data is not valid")
    }

    User.create(data)
    .then(data => res.status(201).send({data}))
    .catch(err => res.status(404).send("data not added to the database"))

}

// reading all users from the databse 

export const readUser = async(req:Request, res:Response) => {

    await User.findAll({
        where:{}
    })
    .then(data => res.send({data}))
    .catch(err => res.status(404).send("No Records Found "))

}


//update user by id 

export const updateUser = (req:Request,res:Response) => {
    const {id} = req.params;
    const data = req.body;

    User.update(data,{where:{id}})           // new values to be updated 
    .then(data => res.send("Updated the user"))
    .catch(err => console.log("user not updated",err))
 
}

// delete user using id 

export const deleteUser = (req:Request, res:Response) => {
    const id = req.params.id;
    
    User.destroy({
        where:{
            id:id
        }
    })
    .then(data =>res.send("data deleted successfull"))
    .catch(err => console.log("Data not deleted"));
}