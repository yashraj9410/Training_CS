import Profile from '../model/profile-model'
import User from '../model/user-model'
import {Request,Response} from 'express'
// creating profile controllers 


export const createProfile = async(req:Request,res:Response) => {
    console.log("in create Profile ")

    const {id} = req.params
    const userid = req.params.id;
    const data = req.body;
    console.log(id);
    data.userId = userid;

    // check if a user exists y thr id
    User.findByPk(id)
    .then(result => {
        if(result){
            Profile.create(data)
            .then(data => res.status(201).send({data}))
            .catch(err => res.status(400).send("Profile data not added to the database"))
        }
    })
    .catch(err => res.status(404).send("No User found with this id"))
}
