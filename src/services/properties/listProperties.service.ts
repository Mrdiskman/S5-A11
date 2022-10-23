import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entity";

const listPropertiesService = async ():Promise<Propertie[]>=>{
  
  const propertyRepository = AppDataSource.getRepository(Propertie);
  const property = await propertyRepository.find();

  return property
}

export default listPropertiesService