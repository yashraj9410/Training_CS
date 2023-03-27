// creating the moddel for user

import {Model , Table , Column , DataType } from 'sequelize-typescript';
// import { DataTypes } from 'sequelize';

@Table({
    timestamps:false
})
export default class User extends Model {
    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    declare name:string

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    declare age:number
}

