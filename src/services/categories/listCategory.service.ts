import AppDataSource from "../../data-source";
import { Categorie } from "../../entities/categories.entinty";

const listCategoriesService = async ():Promise<Categorie[]>=>{
  
  const categoriesRepository = AppDataSource.getRepository(Categorie);
  const categories = await categoriesRepository.find();

  return categories
}

export default listCategoriesService