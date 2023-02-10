import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { FlavorToCondiment } from "./FlavorToCondiment";

/**
 * 调料实体
 * 如：辣椒、孜然、椒盐、甜辣酱、梅子粉
 */
@Entity()
export class Condiment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  /**
   * 描述
   */
  @Column()
  describe: string

  /**
   * 提示
   */
  @Column()
  tips: string

  @OneToMany(() => FlavorToCondiment, flavorToCondiment => flavorToCondiment.condiment)
  flavorToCondiments: FlavorToCondiment[]
  
}