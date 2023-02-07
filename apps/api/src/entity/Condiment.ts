import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { FlavorToCondiment } from "./FlavorToCondiment";

@Entity()
export class Condiment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  describe: string

  @Column()
  tips: string

  @OneToMany(() => FlavorToCondiment, flavorToCondiment => flavorToCondiment.condiment)
  flavorToCondiments: FlavorToCondiment[]
  
}