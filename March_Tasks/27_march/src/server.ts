// creating the server 

import express from 'express'
const server = express();
import db from './middleware/connection'
import router from './routes/user-route'

// checking the database connection 

try {
    db.authenticate();
    db.sync({alter:true})               // drop the existing table and then recreate  
    console.log("Database connected");
    start_server();
    
} catch (error:any) {
    console.log("database not connected");
}

// creating a method to run our server 
function start_server() {
    server.use(express.json());    // getting requests in the form of json object 

    server.use(express.urlencoded({extended:true}));

    server.use("/api/" , router);

    server.listen(3000,() => {
        console.log("Server running at 3000")
    })
}