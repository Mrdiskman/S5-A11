import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { Propertie } from "./properties.entity";
@Entity("categories")

export class Categorie {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100, unique: true, nullable: false })
  name: string;

  @OneToMany(()=> Propertie, (propertie)=> propertie.category)
  properties: Propertie[]

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}