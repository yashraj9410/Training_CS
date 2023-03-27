"use strict";
// making connection to the mssql server using sequelize and the config module 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db-config/config"));
// creating a new connection instance for database 
const db = new sequelize_1.Sequelize(config_1.default.db, config_1.default.user, config_1.default.password, {
    host: config_1.default.host,
    port: config_1.default.port,
    dialect: 'mssql',
    dialectOptions: {
        requestTimeout: 30000,
        options: {
            encrpt: true
        }
    }
});
// exporting the instance 
exports.default = db;
