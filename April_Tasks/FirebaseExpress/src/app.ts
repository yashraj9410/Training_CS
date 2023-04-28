// creating the server 
// creating the server 
import express from 'express';
const app =express();

// routes for all models
import user_router from './routes/user-routes'
import admin_router from './routes/admin-routes'
import task_router from './routes/task-routes'
import taskStatus_routes from './routes/taskStatus-route'

// database instance 
import db from './middleware/connection'

// setting up swagger
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './swaggerDef';

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
    const specs = swaggerJsdoc(swaggerOptions);
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use("/api/user" , user_router );
    app.use("/api/admin" , admin_router );
    app.use("/api/task" , task_router)
    app.use("/api/taskStatus" , taskStatus_routes);
    // setting up middlewre for swagger 
    
    app.use("/api/docs",  swaggerUi.serve, swaggerUi.setup(specs))

    //setting up the server 
    app.listen(3300, () => {
        console.log("listening at 3300");
    })
}