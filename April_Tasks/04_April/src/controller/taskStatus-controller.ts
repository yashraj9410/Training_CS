//  making controller for the taskStatus model 
import Task_Status from '../model/taskStatus-model'
import Task from '../model/task-model'
import User from '../model/user-model'
import {Request, Response} from 'express'
import db from '../middleware/connection'

// setting the task status 
export const set_Task_Status = (req:Request,res:Response) => {
    const status = req.body.isCompleted;   // fetching the status from body
    const taskid = req.body.id;            // getting the task id 

    Task.findByPk(taskid)
    .then(task => {
        if(task){
            Task_Status.findByPk(taskid)
            .then(present => {
                if(present){
                    res.status(400).send("taskstatus is already present")
                } else {
                    Task_Status.create({
                        description:task.description,
                        isCompleted:status,
                        taskId:taskid
                    })
                    .then(data => res.status(201).send("task_status created") )
                    .catch(err => res.status(400).send("Task status not created , bad request"))
                }
            })
        }
    })
    .catch(err => res.status(404).send("No task exist with the given id "))
} 


// change task status function for the user/admin 
export const change_task_status = (req:Request, res:Response) => {
    const taskid = req.body.taskid;

    Task_Status.findByPk(taskid)
    .then(task => {
        if(task){
            Task_Status.update({isCompleted:req.body.status}, {where:{taskId:taskid}})
            .then(data => res.status(200).send("Task status Updated"))
            .catch(err => res.status(401).send("Task not updated successfully"))
        }
    })
    .catch(err => res.status(404).send("No task status found please create a task status before updating"))
}

// deleting a task status
export const delete_task_status = (req:Request, res:Response) => {
    const taskid = req.params.id;
    Task_Status.findByPk(taskid)
    .then(task => {
        if(task){
            Task_Status.destroy({where:{taskId:taskid}})
            .then(data => res.status(200).send("Task Status deleted"))
            .catch(err => res.status(401).send("Task Status not deleted successfully"))
        }
    })
    .catch(err => res.status(404).send("No task status found please create a task status before deleting"))
}

// by default sequelize include uses left outer join but we can make it use inner join by specyfying the required property of include to true
// eg>

// User.finbypk(id , include:[
//     {
//         model:User,
//         required:true    --> this will create a inner join 
//         right:true       --> this will ccreate right outer join , NOTE: required must be false in order to use right outer join
//     }
// ])  

//the above code will make the use of inner join 

// get all the details of user , task , task status
export const get_all_details = (req:Request, res:Response) => {
    const taskid = req.params.id;

    Task.findByPk(taskid , {include:[User, Task_Status]})
    .then(task => res.status(200).send(task))
    .catch(err => res.status(404).send(err))
}