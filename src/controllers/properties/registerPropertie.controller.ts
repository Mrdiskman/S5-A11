import {Request, Response} from "express"
import registerPropertieService from "../../services/properties/registerProperties.service"

const createPropertieController = async(req: Request, res: Response) =>{
  const body = req.body

  const newPropertie = await registerPropertieService(body)

  return res.status(201).json(newPropertie)
}

export default createPropertieController