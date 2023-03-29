// creating the profile-mmodel 
import {Table , Column , BelongsTo , HasOne, DataType, ForeignKey , Model} from 'sequelize-typescript'
import User from './user-model';

// Profile class 
@Table({
    timestamps:false
})
class Profile extends Model {
    @Column({
        type: DataType.TEXT,
        allowNull:false
    })
     declare name:string
    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
     declare phone:string
    @Column({
        type: DataType.TEXT,
        allowNull:false
    })
     declare address:string

    @ForeignKey(()=> User)
    @Column({
        type: DataType.INTEGER,
        allowNull:false,
    })
     declare userId:Number
    @BelongsTo(()=> User )            // pofile belongs to the user 
     declare users:User
}

export default Profile