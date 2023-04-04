// using transactions for performing CRUD operations in user 

import User from '../model/user-model';

import {Request, Response } from 'express';

import db from '../middleware/connection';


// using the db.transaction function 

export const register = async(req:Request,res:Response) => {
    const data = req.body;
    try{
        await db.transaction(async(t) => {                           // here we have defined a transaction 
            await User.create(data,{transaction:t})                  // these are the operations under the transaction , autorollback
                .then(data => res.status(201).send(data))
                .catch(err => res.status(400).send(err));
        })
    }
    catch(err){
        res.status(500).send(err);                                  // if command comes to this line then the transcation will be rollbacked 
    }
}

// the above is the example of managed transaction that performs auto-commit and rollback also 

// read the users from th database
export const readUser = async(req:Request,res:Response) => {
    try {
        await db.transaction(async(t) => {
            await User.findAll({where:{}})
            .then(data => {
                if(data && data.length){
                    res.status(200).send(data);
                }else{
                    res.status(404).send("Database is empty")
                }
            })
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

// login for the user 
export const login = async(req:Request,res:Response) => {

}