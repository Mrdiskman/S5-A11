import { Router } from "express";
import createSchedulesController from "../controllers/schedules/createSchedules.controller";
import listScheduleController from "../controllers/schedules/listSchedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";


const router = Router();
router.post("", ensureAuthMiddleware, createSchedulesController);
router.get("", ensureAuthMiddleware, verifyIsAdmMiddleware, listScheduleController)

export default router;
 