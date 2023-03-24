

module.exports = (sequelize,Sequelize) => {
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
        profile_pic:{
           
            type:Sequelize.STRING,
        }
    });

    return Student;
}
