// creating the server 
// creating the server 
import express from 'express';
const app =express();
import user_router from './routes/user-routes'
import admin_router from './routes/admin-routes'
import db from './middleware/connection'

// connecting to the database 
try {
    db.authenticate();
    db.sync({alter:true})
    .then(data => {
        console.log("Database Connected Successfully")
        startServer();
    })
    .catch(err=> console.log(err));

} catch (error) {
    console.log("database Not cconnected ");
}

// making the start server function 
const startServer = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use("/api/user" , user_router );
    app.use("/api/admin" , admin_router );

    app.listen(3300, () => {
        console.log("listening at 3300");
    })
}