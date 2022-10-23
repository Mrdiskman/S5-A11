// import AppDataSource from "../../data-source";
// import { Propertie } from "../../entities/properties.entity";
// import { appError } from "../../errors/appError";

// const listSchedulesByPropertyService = async (propertyId:string) =>{  

//   const propertyRepository = AppDataSource.getRepository(Propertie)
//   const listSchedules = await propertyRepository.findOne({
//     where:{
//       id:propertyId
//     },
//     relations:{
//       schedules:true
//     }
//   })

//   if(!listSchedules){
//     throw new appError(404, "Schedules not found")
//   }

//   return listSchedules
// }

// export default listSchedulesByPropertyService