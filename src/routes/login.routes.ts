import { Router } from "express";
import userLoginController from "../controllers/users/userLogin.controller";

const router = Router();
router.post("", userLoginController);

export default router;
