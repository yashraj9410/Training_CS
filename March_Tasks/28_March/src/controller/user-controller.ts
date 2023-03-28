// creating the controller functions
import model from '../model/user-model';
import {Request, Response} from 'express'

// ceating a new user 
export const createUser = async(req:Request,res:Response) => {
    console.log("in create User");

    // if there are no errors 
    const data = req.body ;
    console.log(data);
    await model.User.create(data)
    .then(data => res.status(201).send({data}))
    .catch(err => res.status(400).send("data not added to the database"))

}

// creating a profile correponding to the user 
export const createProfile = async(req:Request,res:Response) => {
    console.log("in create Profile ")

    const {id} = req.params
    const data = req.body;
    console.log(id,data);

    model.Profile.create(data)
    .then(data => res.status(201).send({data}))
    .catch(err => res.status(400).send("Profile data not added to the database"))
}