// creating a mode for the task status assigned to the user 

import {Table , Column , BelongsTo , HasOne, DataType, ForeignKey , Model, HasMany, AllowNull} from 'sequelize-typescript'
import Task from './task-model'

// creatuing a new model to maintian the status of the task that is in progress and completed 
@Table({
    timestamps:false
})
class Task_Status extends Model {
    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    declare status:string

}
 
export default Task_Status