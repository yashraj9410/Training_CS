// creating the model for student database 

//const { sequelize } = require(".");

module.exports = (sequelize,Sequelize) =>{
    const Booking = sequelize.define("booking",{
        name:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        num_people:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        phone:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        time:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        table:{
            type: Sequelize.STRING,
            allowNull:false,
        },
    });

    return Booking;

};