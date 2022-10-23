import { Request, Response } from "express";
import createcategoryService from "../../services/categories/createCategorie.service";

const createcategoryController = async(req:Request, res:Response) => {
  
  const name = req.body 
  const newCategory = await createcategoryService(name)

  return res.status(201).json(newCategory)


}

export default createcategoryController