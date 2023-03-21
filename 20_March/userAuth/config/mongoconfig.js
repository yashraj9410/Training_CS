const mongoose = require("mongoose");

const connect_db = async()=> {
    try {

        const connect = await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Connection to database successsfull" , connect.connection.host , connect.connection.name)
        
    } catch (error) {

        console.log(error);
        process.exit(1);
        
    }

};

module.exports = connect_db;