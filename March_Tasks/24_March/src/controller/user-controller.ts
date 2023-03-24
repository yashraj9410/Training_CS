// creating the controller methods for the model i.e for querying 
import User from '../model/user-model';
import express, {Request , Response} from 'express';


// creating a new user i the database 
export const createUser = (req:Request,res:Response) => {
    const data = req.body ;
    if(!data || !data.name || !data.age || !data.department){
        res.status(404).send("Data is not valid")
    }

    User.create(data)
    .then(data => res.status(201).send({data}))
    .catch(err => res.status(404).send("data not added to the database"))

    console.log(data);
}