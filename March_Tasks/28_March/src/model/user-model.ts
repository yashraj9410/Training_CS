// creating the model for user nd profiles 
import * as dec from 'sequelize-typescript';

// creating the user table 
@dec.Table({
    timestamps:false
})
class User extends dec.Model {
    @dec.Column({
        type:dec.DataType.TEXT,
        allowNull:false,
        // unique:true,
    })
    declare email:string
    @dec.Column({
        type:dec.DataType.TEXT,
        allowNull:false
    })
    declare password:string

    @dec.HasMany(()=> Profile)         // ceating a one to many asociation 
    declare pofiles:Profile[]
}

// creating the profile table 
@dec.Table({
    timestamps:false
})
class Profile extends dec.Model{
    @dec.Column({
        type:dec.DataType.TEXT,
        allowNull:false
    })
    declare name:string
    @dec.Column({
        type:dec.DataType.TEXT,
        allowNull:false
    })
    declare phone:string
    @dec.Column({
        type:dec.DataType.TEXT,
        allowNull:false
    })
    declare address:string

    @dec.ForeignKey(()=> User)
    @dec.Column({
        type:dec.DataType.INTEGER,
        allowNull:false,
    })
    declare userId:Number
    @dec.BelongsTo(()=> User)            // pofile belongs to the user 
    declare users:User
}

export default{User,Profile};