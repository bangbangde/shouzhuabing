import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Condiment } from "./Condiment";
import { Flavor } from "./Flavor";

@Entity()
export class FlavorToCondiment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  flavorId: number

  @Column()
  condimentId: number

  @Column()
  selectDefault: 'tad' | 'less' | 'normal' | 'more' | 'excess' | 'none'

  @Column()
  describe: string

  @Column()
  tips: string

  @ManyToOne(() => Flavor)
  flavor: Flavor

  @ManyToOne(() => Condiment)
  condiment: Condiment

}