// creating the model for the user 

import { DataTypes } from "sequelize";

import db from '../middleware/connection';

const user_model = db.define('User_model', {
    name:{
        type:DataTypes.STRING,
    },
    age:{
        type:DataTypes.NUMBER
    },
    department:{
        type:DataTypes.STRING
    }
},{
    timestamps:false  //removing the created at and updated at coloumns 
});


export default user_model;