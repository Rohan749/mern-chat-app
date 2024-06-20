import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import authUser from "../middleware/authUser.js";

const router = Router()

router.get("/getAllUsers", authUser, getAllUsers)

export default router