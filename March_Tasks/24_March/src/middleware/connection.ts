// making connection to the mssql server using sequelize and the config module 

import { Sequelize } from 'sequelize';
import config from '../db-config/config';

// creating a new connection instance for database 

const db = new Sequelize(config.db, config.user, config.password,{
    host:config.host,
    port:config.port,
    dialect:'mssql',
    dialectOptions: {
        requestTimeout:30000,
        options:{
            encrpt:true
        }
    }
});

// exporting the instance 
export default db;