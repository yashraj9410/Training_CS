// creating the server 
import express from 'express';
const server =express();

// importing the connect db 
import connect_db from './db/db-connect';



// creating the start server function
connect_db();
server.listen(4000, () => {
    console.log("Server running at 4000");
})