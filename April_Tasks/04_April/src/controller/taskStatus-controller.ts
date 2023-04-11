//  making controller for the taskStatus model 
import Task_Status from '../model/taskStatus-model'
import Task from '../model/task-model'
import {Request, Response} from 'express'
import db from '../middleware/connection'


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
                }else{
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