import Profile from '../model/profile-model'
import User from '../model/user-model'
import {Request,Response} from 'express'
// creating profile controllers 


// creating a new profile for the user 
export const createProfile = async(req:Request,res:Response) => {
    console.log("in create Profile ")

    const id = req.user?.id;
    const data = req.body;
    
     // checking if a profile already exists by the given user id (because we have a one to one relation )
     Profile.findOne({where:{userId:id}})
     .then(user => {
         if(user){
            return res.status(403).send("Profile Already exists for the user");
         }else{
            data.userId = id;    // the data.userid is the foreign key referencing to the user table 

            User.findByPk(id)        // check if user exists by the id 
            .then(result => {
                if(result){
                    Profile.create(data)
                    .then(data => res.status(201).send({data}))
                    .catch(err => res.status(400).send("Profile data not added to the database"))
                }
            })
            .catch(err => res.status(404).send("No User found with this id"))
         }
     })
}


// reading the profile corresponding to the user 
export const readProfile = async(req:Request,res:Response) => {
    const id = req.user?.id;

    ///checking for user with that id 
    User.findByPk(id)
    .then(data => {
        if(data){
            Profile.findAll({where:{}})
            .then(profile => {
                if(profile){
                    res.status(200).send({profile});
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

    const id = req.user?.id;

    User.findByPk(id)
    .then(user => {
        if(user){
            Profile.update(req.body, {where:{userId:id}})
            .then(data => res.status(201).send("Profile Updated Successfully"))
            .catch(err => res.status(403).send("User not authorised to update"));
        }
    })
    .catch(err => res.status(404).send("no user found with the given id"));

}

// deleting the profile corresponding to the user 
export const deleteProfile = async(req:Request,res:Response) => {

    const id = req.user?.id;


    ///checking for user with that id 
    User.findOne({where:{id}})
    .then(data => {
        if(data){
            Profile.destroy({where:{userId:id}})
            .then(profiles => {
                if(profiles){
                    res.status(200).send("Profile deleted successfully ");
                }else {
                    res.status(404).send("No profiles found for the user");
                }
            })
            .catch(err => res.status(404).send("No user exist with this id "))
        }
    })
}