import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from 'uuid';
import { Schedule } from "./shedules_users_properties";
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;
  @Column({ length: 150 })
  name: string;
  @Column({ length: 100, unique: true, nullable: false })
  email: string;
  @Column({ length: 150 })
  @Exclude()
  password: string;
  @Column()
  isAdm: boolean;
  @Column({ default: true })
  isActive: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(()=> Schedule, (schedule)=>schedule.user)
  schedules:Schedule[]

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
