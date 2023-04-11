// creating a mode for the task status assigned to the user 

import {Table , Column , BelongsTo , HasOne, DataType, ForeignKey , Model, HasMany, AllowNull} from 'sequelize-typescript'
import Task from './task-model'

@Table({
    timestamps:false
})
class Task_Status extends Model {
    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    declare description:string
    @Column({
        type:DataType.BOOLEAN,
        allowNull:false      
    })
    declare isCompleted:boolean

    @ForeignKey(() => Task)
    @Column({})
    declare taskId:Number
    @BelongsTo(() => Task)
    declare task:Task
}

export default Task_Status