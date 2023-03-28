// creating the moddel for user

import {Model , Table , Column , DataType } from 'sequelize-typescript';
// import { DataTypes } from 'sequelize';

@Table({
    timestamps:false             // removes updatedAt and createdAt coloumns from the table 
})
export default class User extends Model {
    @Column({
        type:DataType.TEXT,
        allowNull:false         // allow no null values 
    })
    declare name:string

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    declare age:number

    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    declare department:string

    @Column({
        type:DataType.BOOLEAN,
        allowNull:false
    })
    declare isActive:boolean
}
