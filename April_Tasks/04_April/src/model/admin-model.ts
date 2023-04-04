// model or the admin 

import {Table , Column , BelongsTo , HasOne, DataType, ForeignKey , Model, HasMany} from 'sequelize-typescript'
import Task from './task-model';
import bcrypt from 'bcrypt';

@Table({
    timestamps:false
})
 class Admin extends Model {
    @Column({
        type:DataType.TEXT,
        allowNull:false,
        // unique:true,
    })
    declare email:string
    @Column({
        type:DataType.TEXT,
        allowNull:false    
    })
    set password(value:string) {
        this.setDataValue('password' , bcrypt.hashSync(value,10));
    }   
    @HasMany(()=> Task , {onDelete:'CASCADE'})         // ceating a one to many asociation 
    declare tasks:Task[]
}

// creating a instance of class User


export default Admin