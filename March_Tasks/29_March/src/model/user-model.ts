// creating the user-model 
import {Table , Column , BelongsTo , HasOne, DataType, ForeignKey , Model} from 'sequelize-typescript'
import Profile from './profile-model';
import bcrypt from 'bcrypt';

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
    set password(value:string) {
        this.setDataValue('password' , bcrypt.hashSync(value,10));
    }   
    @HasOne(()=> Profile , {onDelete:'CASCADE'})         // ceating a one to many asociation 
    declare pofiles:Profile[]
}

// creating a instance of class User


export default User