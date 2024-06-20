import { Router } from "express";
import {getMessage, sendMessage} from "../controllers/message.controller.js"
import authUser from "../middleware/authUser.js"

const route = Router();

route.post("/sendMessage/:id", authUser, sendMessage)
route.get("/getMessage/:id", authUser, getMessage)


export default route