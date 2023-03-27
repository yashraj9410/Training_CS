// making connection to the mssql server using sequelize and the config module 

import { Sequelize } from 'sequelize-typescript';
import config from '../config/config';

// creating a new connection instance for database 

const db = new Sequelize({
    database:config.db,
    dialect: 'mssql',
    username: config.user,
    password: config.password,
    host:config.host,
    port:config.port,
    models:["C:/Users/YashRaj/Documents/GitHub/Training_CS/March_Tasks/27_march/src/model"]      // either we can add model here 
});

// db.addModels([__dirname, '../models'])
// exporting the instance 
export default db;