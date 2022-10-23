import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { Address } from "./addresses.entity";
import { Categorie } from "./categories.entinty";
import { Schedule } from "./shedules_users_properties";

@Entity("properties")
export class Propertie {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({default:false})
  sold: boolean;
  
  @Column({ nullable: false, type:"decimal", precision:12, scale:2})
  value: number;
  
  @Column({ nullable: false, type:"integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
 
  @OneToOne(() => Address) 
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Categorie, (categorie) => categorie.properties)
  category: Categorie

  @OneToMany(() => Schedule, (schedule) => schedule.property)
  schedules: Schedule[]
 
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}