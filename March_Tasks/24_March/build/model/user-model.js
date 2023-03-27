"use strict";
// creating the model for the user 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../middleware/connection"));
const user_model = connection_1.default.define('User_model', {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.STRING
    },
    department: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false //removing the created at and updated at coloumns 
});
exports.default = user_model;
