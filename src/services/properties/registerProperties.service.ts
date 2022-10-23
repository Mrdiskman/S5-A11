import AppDataSource from "../../data-source"
import { Address } from "../../entities/addresses.entity"
import { Categorie } from "../../entities/categories.entinty"
import { Propertie } from "../../entities/properties.entity"
import { appError } from "../../errors/appError"
import { IAddressRequest, IPropertyRequest } from "../../interfaces/property"

const registerPropertieService = async({value, size, address, categoryId}: IPropertyRequest): Promise<Propertie> =>{
  const propertieRepository = AppDataSource.getRepository(Propertie)
  const addressRepository = AppDataSource.getRepository(Address)
  const categorieRepository = AppDataSource.getRepository(Categorie)

  const categorie = await categorieRepository.findOneBy({id:categoryId})
  if(!categorie){
    throw new appError(404, "Categorie not found")
  }

  if(address.state.length > 2){
    throw new appError(400, "Invalid State")
  }
  const isUnvaiable = await addressRepository.findOneBy({district: address.district});

  if(isUnvaiable){
    throw new appError(400, "Address already exists")
  }

  const newAddressObj:IAddressRequest = {
    district: address.district,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  }

  const newAddress = addressRepository.create(newAddressObj)
  await addressRepository.save(newAddress)

  const newPropertie = propertieRepository.create({
    value,
    size,
    address: newAddress,
    category: categorie,
  });

  await propertieRepository.save(newPropertie);

  return newPropertie;
};

export default registerPropertieService