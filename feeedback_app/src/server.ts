// creating the server 
import express from 'express';
const server =express();

// importing routes
import feedback_template_router from './routes/feedback_template_route'
import feedback_router from './routes/feedback_route'

// importing the  db config 
import connect_db from './db/db-connect';

//importing swagger modules for documentation
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


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


// making swagger configurations
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Feedback Management Swagger UI",
        version: "0.1.0",
        description: "Feedback Management API ",
      },
      servers: [
        {
          url: "http://localhost:4000",
        },
      ],
    },
    apis: ["./routes/*.ts" , "./src/documentation/*.yaml"],
  };
  
  const specs = swaggerJsdoc(options);
  server.use(
    "/swagger", 
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );