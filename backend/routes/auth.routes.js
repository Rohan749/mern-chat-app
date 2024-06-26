import { Router } from "express";
import { ChangeUserDataController, LoginController, LogoutController, SignupController } from "../controllers/auth.controller.js";
import authUser from "../middleware/authUser.js";



const router = Router();

router.post("/signup", SignupController)
router.post("/login", LoginController)
router.post("/logout", LogoutController)
router.put("/update", authUser, ChangeUserDataController)

export default router