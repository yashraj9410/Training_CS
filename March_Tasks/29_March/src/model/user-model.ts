// creating the user-model 
import {Table , Column , BelongsTo , HasOne, DataType, ForeignKey , Model} from 'sequelize-typescript'
import Profile from './profile-model';


@Table({
    timestamps:false
})
 class User extends Model {
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
    declare password:string

    @HasOne(()=> Profile , {onDelete:'CASCADE'})         // ceating a one to many asociation 
    declare pofiles:Profile[]
}

export default User