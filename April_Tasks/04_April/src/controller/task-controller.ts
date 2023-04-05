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
    const email = req.user?.email;
    

    //check for the user if exist 
    Admin.findOne({where:{id:adminid,email:email}})
    .then(admin => {
        if(admin){                                     // if admin exists ten check if  user exists 
           User.findByPk(data.userId)
           .then(user => {
                if(user){
                    data.adminId = adminid;
                    Task.create(data)                         // create task for the user
                    .then(task=> res.status(201).send(task))
                    .catch(err => res.status(400).send("No Task Created"))
                }
           })
           .catch(err => res.status(404).send("No user existe for the userId"))
        }
    })
    .catch(err => res.status(403).send("No admin exist with this adminId"))
}

// read task 
// this method can be accessed by both user and admin 
// in case of admin they can read all the task they have created for the users 
// users can only read task assigned on their id's 
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
            .then(task => {
                if(task){
                    res.status(200).send(task)
                }else{
                    res.status(404).send("No task Assigned")
                }
            })     // if user exist then give the task assigned to the user 
            .catch(err => res.status(403).send(err))
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

// delete task 
// admin is only authorised to delete the task

export const deleteTask = (req:Request,res:Response) => {
    const {id} = req.params;                                // task id from params
    const adminid = req.user?.id;                           // admin id and email  from token payload
    const email = req.user?.email;

    Admin.findOne({where:{id:adminid,email:email}})
    .then(admin => {
        if(admin){
            Task.destroy({where:{
                adminId:adminid,
                id
            }})
            .then(result => res.status(200).send("task Deleted"))
            .catch(err => res.status(404).send("No task deleted"))
        }
    })
    .catch(err => res.status(403).send("Unauthorised admin , no admin found"))
}


// update task 
// admin is only authorised to update the task

export const updateTask = (req:Request,res:Response) => {
    
}