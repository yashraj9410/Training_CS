// creating the controller functions
import model from '../model/user-model';
import {Request, Response} from 'express'
import {validationResult} from 'express-validator';

// ceating a new user 
export const createUser = async(req:Request,res:Response) => {
    console.log("in create User");
    // if req conyain any error sent by the middleware expess - validator then
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).send(err.array());
    }

    // if there are no errors 
    const data = req.body ;
    await model.User.create(data)
    .then(data => res.status(201).send({data}))
    .catch(err => res.status(400).send("data not added to the database"))

}