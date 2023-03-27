// // creating the model using class and sequelize init contructor 
// import {Model , InferAttributes , InferCreationAttributes , DataTypes, Sequelize} from 'sequelize';
// import db from '../middleware/connection'

// // creting a user class 
// class User extends Model<InferAttributes<User> , InferCreationAttributes<User>> {
//     declare id:number;
//     declare name:String;
//     declare age:String;
//     declare department:String;
//     declare createdAt:Date;
//     declare updatedAt:Date;
// }

// User.init({
//     id:{
//         type:DataTypes.INTEGER,
//         primaryKey:true,
//         autoIncrement:true
//     },
//     name:DataTypes.STRING,
//     age:DataTypes.STRING,
//     department:DataTypes.STRING,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE,

// },{db},);  // passing the sequelize instance 
