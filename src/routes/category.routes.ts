import { Router } from "express";
import createcategoryController from "../controllers/category/createCategory.controller";
import listPropertyByCategoryController from "../controllers/category/listcategoryByProperty.contoller";
import listCategoriesController from "../controllers/category/listCategoryController";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import verifyCategoryNameMiddleware from "../middlewares/verifyCategorieName.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();
router.post("", ensureAuthMiddleware, verifyIsAdmMiddleware, verifyCategoryNameMiddleware, createcategoryController);
router.get("", listCategoriesController)
router.get("/:id/properties", listPropertyByCategoryController
)

export default router;
