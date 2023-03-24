// creating a user authentication apui with login and user database 
// using the authorisation and authetication

// creating rest CRUD api 

const dotenv = require("dotenv").config();

const express =require("express");
const app = express();
const port = process.env.PORT || 3300;
const errorHandler = require("./middleware/errorHandler");    // created a error handler middleware for mongo queries

const connectdb = require("./config/mongoconfig");            // importing the connect db config
const contact_router = require("./routes/contactRoute");
const user_router = require("./routes/userRoute.js")

app.use(express.json());                                     // parsing the body in express.json

                                     

app.use("/api/contacts/", contact_router);                    // api route for the ciontact controller
app.use("/api/users/", user_router);                          // api route for the user controller 

app.use(errorHandler);   // using error handler 

connectdb();  // calling the function from the connect db config
app.listen(port,()=> console.log(`Port running at ${port}`));


// mongoose.connect(
//     "mongodb+srv://yash:1234@yashcluster.etn6kts.mongodb.net/myContacts_Backend?retryWrites=true&w=majority"
//     ).then(()=> console.log("database connected"))
//     .catch(err => console.log(err));