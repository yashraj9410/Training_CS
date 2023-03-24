// creating the model for student database 

//const { sequelize } = require(".");

module.exports = (sequelize,Sequelize) =>{
    const Student = sequelize.define("student",{
        name:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        class:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        roll_number:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        subjects:{
            type: Sequelize.STRING,
            allowNull:false,

        },
    });

    return Student;

};