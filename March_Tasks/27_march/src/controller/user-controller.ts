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
    .then(data => {
        if(data && data.length){
           return res.status(200).send(data);
        }
        else{
            return res.status(404).send("Database Empty");
        }
    })
    .catch(err => res.status(404).send(err))

}


//update user by id 

export const updateUser = (req:Request,res:Response) => {
    const {id} = req.params;
    const data = req.body;

    User.findByPk(id)
    .then(data => {
        if(data){
            User.update(data,{where:{id}})           // new values to be updated 
            .then(data => res.status(200).send("Updated the user"))
            .catch(err => console.log("user not updated",err))
        }else{
            res.status(404).send("No user found with this id ")
        }
    })
    .catch(err => res.send(err));
}

// delete user using id 

export const deleteUser = (req:Request, res:Response) => {
    const {id} = req.params;
    
    User.findByPk(id)
    .then(data => {
        if(data){
            User.destroy({
                where:{
                    id:id
                }
            })
            .then(data =>res.status(200).send("data deleted successfull"))
            .catch(err => console.log("Data not deleted"));
        }else{
            res.status(404).send("No records with the given id ")
        }
    })
    .catch(er => {res.send(er)})
    
}

// status codes
// 200 - OK
// 201 - Created 
// 202 - Accepted
// 400 - Bad Request 
// 401 - Unauthorised
// 403 - Forbidden
// 404 - Not Found 
// 500 - Interna Server error 