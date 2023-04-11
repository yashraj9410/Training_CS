//  making controller for the taskStatus model 
import Task from '../model/task-model'
import {Request, Response} from 'express'
import db from '../middleware/connection'


export const set_Task_Status = (req:Request,res:Response) => {
    const status = req.body;   // fetching the status from body
}