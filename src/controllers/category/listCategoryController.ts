import { Request, Response } from "express";
import listCategoriesService from "../../services/categories/listCategory.service";

const listCategoriesController = async(req:Request, res:Response)=>{
  const listcategories = await listCategoriesService()
  return res.status(200).json(listcategories)
}

export default listCategoriesController