// creating the controller functions
import model from '../model/user-model';
import {Request, Response} from 'express'

// ceating a new user 
export const createUser =(req:Request,res:Response) => {
    console.log("in create User");

    // if there are no errors 
    const data = req.body ;
    console.log(data);

    model.User.findOne({where:{
        email:data.email
    }})
    .then(isPresent => {
        if(isPresent){
            res.status(401).send("User is already present")
        }else{
             model.User.create(data)
            .then(data => res.status(201).send({data}))
            .catch(err => res.status(400).send("data not added to the database"))
        }
    })
    .catch(err => res.send(err));

}

//getting all profiles for user 

export const getUserProfiles = async(req:Request,res:Response) => {
    const {userId}  = req.params;          
    model.Profile.findAll({where:{userId}})
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err));
}

// creating a profile correponding to the user 
export const createProfile = async(req:Request,res:Response) => {
    console.log("in create Profile ")

    const {id} = req.params
    const userid = req.params.id;
    const data = req.body;
    console.log(id);
    data.userId = userid;

    // check if a user exists y thr id
    model.User.findByPk(id)
    .then(result => {
        if(result){
            model.Profile.create(data)
            .then(data => res.status(201).send({data}))
            .catch(err => res.status(400).send("Profile data not added to the database"))
        }
    })
    .catch(err => res.status(404).send("No User found with this id"))
}

// deleteing a profile corresponding to the user

export const deleteProfile = (req:Request,res:Response) => {
    const userid = req.params.userid;
    const profileId = req.params.profileId;

    model.Profile.findAll({
        where:{
            id:profileId,
            userId:userid
        }
    })
    .then(data => {
        if(data.length){
            model.Profile.destroy({where:{id:profileId}})
            .then(del => res.status(200).send("Data Deleted"))
        }else{
            res.status(404).send("No Profile found for this user")
        }
    })
    .catch(err => res.send(err))
}