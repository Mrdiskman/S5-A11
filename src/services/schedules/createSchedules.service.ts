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
  const hourInput = +hour.split(" : ")[0]
  if(hourInput < 8 || hourInput >= 18){
    throw new appError(400, "Invalid Hour")
  }

  const dateInput = new Date(date).getDay()
  if(dateInput === 0 || dateInput === 6){
    throw new appError(400, "Invalid Date")
  }
 
  if(!property || !user){
    throw new appError(404, "User or property not found")
  }

  const schedules = await scheduleRepository.find()
  const schedulesAlredyExists = schedules.find((elem)=> elem)
  if(schedulesAlredyExists){
    throw new appError(400, "Date and hour invalid")
  }

  const newSchedule = scheduleRepository.create({
    date,
    hour,
    property:property,
    user
  });
  await scheduleRepository.save(newSchedule);

  return newSchedule
}

export default createSchedullesService