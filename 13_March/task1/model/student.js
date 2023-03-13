// creating the model for student database 

//const { sequelize } = require(".");

module.exports = (sequelize,Sequelize) =>{
    const Student = sequelize.define("student",{
        name:{
            type: Sequelize.STRING,
        },
        class:{
            type:Sequelize.STRING,
        },
        roll_number:{
            type:Sequelize.INTEGER,
        },
    });

    return Student;

};