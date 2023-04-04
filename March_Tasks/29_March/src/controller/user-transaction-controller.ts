// using transactions for performing CRUD operations in user 

import User from '../model/user-model';

import {Request, Response } from 'express';

import db from '../middleware/connection';


// using the db.transaction function 

export const create = async(req:Request,res:Response) => {
    const data = req.body;
    try{
        await db.transaction(async(t) => {                           // here we have defined a transaction 
            await User.create(data,{transaction:t})                  // these are the operations under the transaction , autorollback
                .then(data => res.status(201).send(data))
                .catch(err => res.status(400).send(err));
        })
    }
    catch(err){
        res.status(500).send(err);
    }
}