import AppDataSource from "../../data-source";
import { Categorie } from "../../entities/categories.entinty";
import { appError } from "../../errors/appError";

const listPropertyByCategoryService = async (Categoryid:string) =>{  

  const categoryRepository = AppDataSource.getRepository(Categorie)
  const listCategory = await categoryRepository.findOne({
    where:{
      id:Categoryid
    },
    relations:{
      properties:true
    }
  })

  if(!listCategory){
    throw new appError(404, "Category not found")
  }

  return listCategory
}

export default listPropertyByCategoryService