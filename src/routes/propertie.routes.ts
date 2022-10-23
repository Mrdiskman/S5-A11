import { Router } from "express";
import listPropertiesController from "../controllers/properties/listProperties.controller";
import createPropertieController from "../controllers/properties/registerPropertie.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();
router.post("", ensureAuthMiddleware, verifyIsAdmMiddleware,createPropertieController);
router.get("", listPropertiesController)

export default router;
