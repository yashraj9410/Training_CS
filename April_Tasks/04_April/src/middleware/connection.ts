import { Sequelize } from 'sequelize-typescript';
import config from '../config/dbconfig';
import User from '../model/user-model'
import Admin from '../model/admin-model'
import Task from '../model/task-model'
import Task_Status from '../model/taskStatus-model';
// creating a new connection instance for database 

const db = new Sequelize({
    database:config.db,
    dialect: 'mssql',
    username: config.user,
    password: config.password,
    host:config.host,
    port:config.port,
    models:[User,Admin,Task , Task_Status]      // either we can add model here 
});

// db.addModels([__dirname, '../models'])
// exporting the instance 
export default db;