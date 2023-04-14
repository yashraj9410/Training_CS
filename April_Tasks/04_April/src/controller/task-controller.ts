 // task-controller will have all the private methoids hat can only be accessed by the admin 
 // only read task permissions will be given to the user 

 import Admin from '../model/admin-model'
 import User from '../model/user-model'
 import Task from '../model/task-model'
import {Request, Response} from 'express'
import db from '../middleware/connection'
import { QueryTypes } from 'sequelize'
import Task_Status from '../model/taskStatus-model'


// creating a task for the user (only allowed for admins)
// whenever a task will be created there should be a user which exists in the database to which the task is assigned 
export const createTask = (req:Request,res:Response) => {
    
    const {description,userId , statusId} = req.body;

    // fetching details from the token validation
    const adminid = req.user?.id;
    const email = req.user?.email;
    
    //check for the user if exist 
    Admin.findOne({where:{id:adminid,email:email}})
    .then(admin => {
        if(admin){                                     // if admin exists ten check if  user exists 
           User.findByPk(userId)
           .then(user => {
                if(user){
                    Task.create({description,userId, adminId:adminid, statusId})                         // create task for the user
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
            Task.findAll({
                where:{userId:id},
                // creating a virtual field isCompleted that returns a boolean value
                attributes:{
                    include:[
                        [
                            db.literal(`CASE When "statusId"  = (SELECT "id" FROM "Task_Statuses" WHERE "status" = 'Completed') THEN true ELSE false END`),
                            `isCompleted`
                        ]
                    ]
                }
            })   // adding literal along witha virtual field 
            .then(tasks => {
                if(tasks){
                    res.status(200).send(tasks)
                }else{
                    res.status(404).send("No task Assigned")
                }
            })     // if user exist then give the task assigned to the user 
            .catch(err => res.status(403).send(err))
        }else{
            Admin.findOne({
                where:{            // if user not exist then check for admin
                id:id,
                email:email
            }})
            .then(admin => {
                if(admin){
                    Task.findAll({
                        where:{},
                        attributes:{
                            include:[
                                [
                                    db.literal(`CASE When "statusId"  = (SELECT "id" FROM "Task_Statuses" WHERE "status" = 'Completed') THEN true ELSE false END`),
                                    `isCompleted`
                                ]
                            ]
                        }
                    })       // if admin exist then send all the task created 
                    .then(tasks => {
                        if(tasks && tasks.length){
                            res.status(200).send(tasks);
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

// getting all the tasks 
export const getAll = async(req:Request,res:Response) => {
    const id = req.user?.id

    const tasks = await db.query(`SELECT * FROM Tasks WHERE adminID = ${id}`, {type:QueryTypes.SELECT});
    res.status(200).send(tasks);
} 


// using the sequelize literals to generate number of task created by any admin
export const taskCount = async(req:Request , res:Response) => {
    const id = req.user?.id;
    await Task.findAll({
        attributes:{
            include:[
                [
                    db.literal(`(Select Count(*) from Tasks where adminID = ${id})`),
                    `taskcount`
                ]
            ]
        }
    })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(401).send("Some eroor in counting the task "))
}

// change task status to complete 
// the function is going to take task id from params and then call the method basis on the task id to change statusId to 2 i.e completed 
export const change_task_status = (req:Request, res:Response) => {
    const { id } = req.params;

    Task.findByPk(id)
    .then(task => {
        if(task){
            Task_Status.findOne({where:{status:"Completed"}})
            .then(data => {
                if(data){
                    task.statusId = data.id
                    res.status(201).send("Task Status Updated Successfully")
                }
            })
            .catch(err => res.status(404).send("No status found for Completed"))
        }
    })
    .catch(err => res.status(404).send("No task found for the given task id"))
}