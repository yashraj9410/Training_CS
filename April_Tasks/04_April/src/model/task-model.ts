// model for the task
import {Table , Column , BelongsTo , HasOne, DataType, ForeignKey , Model, HasMany, AllowNull} from 'sequelize-typescript'
import Admin from './admin-model';
import User from './user-model'
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

  @BelongsTo(() => Admin)
  declare admin: Admin;

  @ForeignKey(() => User)
  @Column
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;
}

export default Task