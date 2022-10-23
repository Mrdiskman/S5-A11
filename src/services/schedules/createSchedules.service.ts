import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entity";
import { Schedule } from "../../entities/shedules_users_properties";
import { User } from "../../entities/user.entity";
import { appError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedullesService = async ({date, hour, propertyId}:IScheduleRequest, id:string) => {
  const propertiesRepository = AppDataSource.getRepository(Propertie)
  const property = await propertiesRepository.findOneBy({id:propertyId})

  const userReposiry = AppDataSource.getRepository(User)
  const user = await userReposiry.findOneBy({id})

  const scheduleRepository = AppDataSource.getRepository(Schedule)
  const schedules = await scheduleRepository.find();

  if(!property || !user){
    throw new appError(404, "User or property not found")
  }

  const newSchedule = scheduleRepository.create({
    date,
    hour,
    property:property,
    user
  });
  await scheduleRepository.save(newSchedule);
  console.log(newSchedule)

  return newSchedule
}

export default createSchedullesService
