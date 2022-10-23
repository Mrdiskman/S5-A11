import { Request, Response } from "express";
import createSchedullesService from "../../services/schedules/createSchedules.service";

const createSchedulesController = async (req: Request, res: Response) => {  
    const body = req.body;
    const id = req.user.id
    const newSchedule =await createSchedullesService(body, id)

    return res.status(201).json(newSchedule);
}



  export default createSchedulesController