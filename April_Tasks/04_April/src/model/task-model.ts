// model for the task
import {Table , Column , BelongsTo , HasOne, DataType, ForeignKey , Model, HasMany, AllowNull} from 'sequelize-typescript'
import Admin from './admin-model';
import User from './user-model'
import Task_Status from './taskStatus-model'
import bcrypt from 'bcrypt';

@Table({
    timestamps:false
})
 class Task extends Model {
  @Column({
        type:DataType.TEXT,
        allowNull:false
  })
  declare description: string
  
  @ForeignKey(() => Admin) 
  @Column 
  declare adminId: number;

  @BelongsTo(() => Admin)      // every task will have an instance of admin
  declare admin: Admin;

  @ForeignKey(() => User)   
  @Column
  declare userId: number;

  @BelongsTo(() => User)      // every task will have an instance of user
  declare user: User;

  @ForeignKey(() => Task_Status)
  @Column
  declare statusId: number;

  // get isComplete():boolean {          // this function will set the statusId value when called 
  //   return this.statusId === 2 ;
  // } 

  @BelongsTo(() => Task_Status)    // every task will have an instance of task_status
  declare taskstatus: Task_Status;
}


export default Task