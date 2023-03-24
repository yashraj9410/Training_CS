// creating our server for connection 

import express from 'express';
import db from './middleware/connection';
import router from './route/user-route';
const app = express();

// authenticating our database connection 
try {
    db.authenticate();
    db.sync({force:true})               // drop the existing table and then recreate  
    console.log("Database connected");
    start_server();
    
} catch (error:any) {
    console.log("database not connected");
}

// creating a method to run our server 
function start_server() {
    app.use(express.json());    // getting requests in the form of json object 

    app.use(express.urlencoded({extended:true}));

    app.use("/api/" , router);

    app.listen(3500, () => console.log("server running at 3500")  );
}