// specifying some user routes for api requests 

import express from 'express';
const router = express.Router();
import {createUser} from '../controller/user-controller';

router.post("/", createUser);
export default router ;