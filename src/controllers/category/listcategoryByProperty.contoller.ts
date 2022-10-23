import { Request, Response } from "express";
import listPropertyByCategoryService from "../../services/categories/listPropertysByCategory.service";


const listPropertyByCategoryController = async (req:Request, res:Response)=>{
  const {id} = req.params 

  const listOfProperties = await listPropertyByCategoryService(id)

  return res.status(200).json(listOfProperties)
}

export default listPropertyByCategoryController