import express from 'express'
import authmiddleware from '../middleware/authmiddleware.js';
import { getAllUsers } from '../controller/user.controller.js';

const router = express.Router()

router.get("/getUsers",  authmiddleware, getAllUsers);

export default router