import Profile from '../model/profile-model'
import User from '../model/user-model'
import {Request,Response} from 'express'
// creating profile controllers 


// creating a new profile for the user 
export const createProfile = async(req:Request,res:Response) => {
    console.log("in create Profile ")

    const {id} = req.params
    const userid = req.params.id;
    const data = req.body;
    console.log(id);
    data.userId = userid;    // the data.userid is the foreign key referencing to the user table 

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


// reading the profile corresponding to the user 
export const readProfile = async(req:Request,res:Response) => {
    const {id} = req.params;

    ///checking for user with that id 
    User.findOne({where:{id}})
    .then(data => {
        if(data){
            Profile.findAll({where:{id}})
            .then(profiles => {
                if(profiles){
                    res.status(200).send({profiles});
                }else {
                    res.status(404).send("No Profile exist for the user");
                }
            })
            .catch(err => res.status(404).send("No user exist with this id "))
        }
    })
}

// updtaing the profile corresponding to the user 
export const updateProfile = async(req:Request,res:Response) => {
    res.send("Read user profiles ")
}

// deleting the profile corresponding to the user 
export const deleteProfile = async(req:Request,res:Response) => {
    const {id} = req.params;

    ///checking for user with that id 
    User.findOne({where:{id}})
    .then(data => {
        if(data){
            Profile.destroy({where:{id}})
            .then(profiles => {
                if(profiles){
                    res.status(200).send("Profile deleted successfully ");
                }else {
                    res.status(403).send("User not allowed to delete this profile");
                }
            })
            .catch(err => res.status(404).send("No user exist with this id "))
        }
    })
}