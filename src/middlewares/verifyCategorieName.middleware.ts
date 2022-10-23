import { NextFunction, Response, Request } from "express";
import AppDataSource from "../data-source";
import { Categorie } from "../entities/categories.entinty";

const verifyIdCategorieMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const {name} = req.body
  const categoryRepository = AppDataSource.getRepository(Categorie);
  const nameAlredyInUse = await categoryRepository.findOneBy({name})

  if(nameAlredyInUse){
    return res.status(400).json({message: "This category alredy exists"})
  }
  
  next();
};
export default verifyIdCategorieMiddleware;
