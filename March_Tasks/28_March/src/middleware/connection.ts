import { Sequelize } from 'sequelize-typescript';
import config from '../config/dbconfig';

// creating a new connection instance for database 

const db = new Sequelize({
    database:config.db,
    dialect: 'mssql',
    username: config.user,
    password: config.password,
    host:config.host,
    port:config.port,
    models:[]      // either we can add model here 
});

// db.addModels([__dirname, '../models'])
// exporting the instance 
export default db;