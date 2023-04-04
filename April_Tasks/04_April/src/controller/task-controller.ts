 // task-controller will have all the private methoids hat can only be accessed by the admin 
 // only read task permissions will be given to the user 

 import Admin from '../model/admin-model'
 import User from '../model/user-model'
 import Task from '../model/task-model'
import {Request, Response} from 'express'


// creating a task for the user (only allowed for admins)
// whenever a task will be created there should be a user which exists in the database to which the task is assigned 
export const createTask = (req:Request,res:Response) => {
    
    const data = req.body;
    const adminid = req.user?.id;

    //check for the user if exist 
    User.findByPk(data.userId)
    .then(user => {
        if(user){                                     // if user exists 
            data.adminId = adminid;
            User.create(data)                         // create task for the user
            .then(task=> res.status(201).send(task))
            .catch(err => res.status(403).send("No Task Created , Forbidden"))
        }
    })
    .catch(err => res.status(404).send("No user exist with this userid"))
}

// read task 
// this method can be accessed by both user and admin 
// in case of admin they can read all the task they have created for the users 
// users can only read task assigned on their id 
export const readTask = (req:Request, res:Response) => {

    const id =req.user?.id; 
    const email = req.user?.email;
    User.findOne({where:{                        // check if a user exist for the id and email 
        id:id,
        email:email
    }})
    .then(user => {
        if(user){
            Task.findOne({where:{
                userId:id
            }})
            .then(task => res.status(200).send(task))     // if user exist then give the task assigned to the user 
            .catch(err => res.status(404).send("no task assigned"))
        }else{
            Admin.findOne({where:{            // if user not exist then check for admin
                id:id,
                email:email
            }})
            .then(admin => {
                if(admin){
                    Task.findAll({where:{}})       // if admin exist then send all the task created 
                    .then(task => {
                        if(task && task.length){
                            res.status(200).send(task);
                        }
                    })
                    .catch(err =>  res.status(404).send("No Task Created Yet"))
                }
            })
            .catch(err => res.status(404).send("No admin found for the email"))
        }
    })
    .catch(err => res.status(404).send("No user exists for this email"))

}