"use strict";
// creating our server for connection 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./middleware/connection"));
const user_route_1 = __importDefault(require("./route/user-route"));
const app = (0, express_1.default)();
// authenticating our database connection 
try {
    connection_1.default.authenticate();
    connection_1.default.sync({ alter: true }); // drop the existing table and then recreate  
    console.log("Database connected");
    start_server();
}
catch (error) {
    console.log("database not connected");
}
// creating a method to run our server 
function start_server() {
    app.use(express_1.default.json()); // getting requests in the form of json object 
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/api/", user_route_1.default);
    app.listen(3500, () => console.log("server running at 3500"));
}
