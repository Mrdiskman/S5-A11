import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

import { v4 as uuid } from 'uuid';
import { Propertie } from "./properties.entity";
import { User } from "./user.entity";
@Entity("schedules_users_properties")

export class Schedule {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ nullable: false, type:"date" })
  date: Date;
  
  @Column({ nullable: false, type:"time"})
  hour: Date;

  @ManyToOne(() => Propertie, (propertie)=> propertie.schedules)
  property: Propertie;

  @ManyToOne(()=> User, (user)=> user.schedules, {eager:true})
  user:User
  
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
