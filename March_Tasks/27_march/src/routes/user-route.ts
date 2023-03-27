// specifying some user routes for api requests 

import express from 'express';
const router = express.Router();
import {createUser , deleteUser, readUser, updateUser} from '../controller/user-controller';

router.post("/", createUser)
router.get("/",readUser);
router.put("/:id" , updateUser);
router.delete("/:id", deleteUser);

export default router ;