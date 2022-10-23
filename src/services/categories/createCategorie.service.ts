import AppDataSource from "../../data-source";
import { Categorie } from "../../entities/categories.entinty";

const createcategoryService = async ({name}:Categorie) => {

  const categoryRepository = AppDataSource.getRepository(Categorie)

  const newCategory = categoryRepository.create({
    name,
  });
  await categoryRepository.save(newCategory);

  return newCategory
}
export default createcategoryService;