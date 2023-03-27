"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.readUser = exports.createUser = void 0;
// creating the controller methods for the model i.e for querying 
const user_model_1 = __importDefault(require("../model/user-model"));
// creating a new user i the database 
const createUser = (req, res) => {
    const data = req.body;
    if (!data || !data.name || !data.age || !data.department) {
        return res.status(404).send("Data is not valid");
    }
    user_model_1.default.create(data)
        .then(data => res.status(201).send({ data }))
        .catch(err => res.status(404).send("data not added to the database"));
};
exports.createUser = createUser;
// reading all users from the databse 
const readUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.default.findAll({
        where: {}
    })
        .then(data => res.send({ data }))
        .catch(err => res.status(404).send("No Records Found "));
});
exports.readUser = readUser;
//update user by id 
const updateUser = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    user_model_1.default.update(data, { where: { id } }) // new values to be updated 
        .then(data => res.send("Updated the user"))
        .catch(err => console.log("user not updated", err));
};
exports.updateUser = updateUser;
// delete user using id 
const deleteUser = (req, res) => {
    const id = req.params.id;
    user_model_1.default.destroy({
        where: {
            id: id
        }
    })
        .then(data => res.send("data deleted successfull"))
        .catch(err => console.log("Data not deleted"));
};
exports.deleteUser = deleteUser;
