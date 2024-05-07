import express from 'express'
import { getMessages, sendMessages } from '../controller/message.controller.js';
import authmiddleware  from '../middleware/authmiddleware.js';

const router = express.Router();


router.post("/send/:id", authmiddleware, sendMessages);
router.get("/:id", authmiddleware, getMessages)


export default router