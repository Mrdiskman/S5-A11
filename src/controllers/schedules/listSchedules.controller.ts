import { Request, Response } from "express";
import listSchedulesByPropertyService from "../../services/schedules/listOfSchedules.service";


const listSchedulesByPropertyController = async (req:Request, res:Response)=>{
  const {id} = req.params 

  const listOfSchedulesByProperty = await listSchedulesByPropertyService(id)

  return res.json(listOfSchedulesByProperty)
}

export default listSchedulesByPropertyController