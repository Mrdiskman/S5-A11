import { Request, Response } from "express";
import listPropertiesService from "../../services/properties/listProperties.service";


const listPropertiesController = async(req:Request, res:Response)=>{
  const listProperties = await listPropertiesService()
  return res.status(200).json(listProperties)
}

export default listPropertiesController