// creating the server 
import express from 'express';
const server =express();

// importing routes
import feedback_template_router from './routes/feedback_template_route'
import feedback_router from './routes/feedback_route'

// importing the  db config 
import connect_db from './db/db-connect';



// connect db function 
const start_server = async() => {

    try {

        await connect_db();
        server_config();

    } catch (error) {
        console.log("Error in connecting db")    
    }
}

const server_config = () => {

    server.use(express.json());

    server.use("/api/feedbackTemplate" , feedback_template_router);
    server.use("/api/feedback" , feedback_router);

    server.listen(4000, () => {
        console.log("Server running at 4000");
    })
}

// start the server 
start_server();