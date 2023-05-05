// creating the server 
import express from 'express';
const server =express();

import feedback_template_router from './routes/feedback_template_route'
import feedback_router from './routes/feedback_route'

// importing the connect db 
import connect_db from './db/db-connect';

server.use(express.json());
server.use("/api/feedbackTemplate" , feedback_template_router);
server.use("/api/feedback" , feedback_router);

// creating the start server function
connect_db();
server.listen(4000, () => {
    console.log("Server running at 4000");
})