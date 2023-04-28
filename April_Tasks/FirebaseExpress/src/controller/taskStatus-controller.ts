//  making controller for the taskStatus model 
import Task_Status from '../model/taskStatus-model'
import { Request, Response } from 'express'

// setting the task status 
export const set_Task_Status = (req: Request, res: Response) => {

    // creating the task statuses
    Task_Status.bulkCreate([{status:"In Progress"} , {status:"Completed"}])
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send("No Task Status Created"))

}

// by default sequelize include uses left outer join but we can make it use inner join by specyfying the required property of include to true

// User.finbypk(id , include:[
//     {
//         model:User,
//         required:true    --> this will create a inner join 
//         right:true       --> this will ccreate right outer join , NOTE: required must be false in order to use right outer join
//     }
// ])  
