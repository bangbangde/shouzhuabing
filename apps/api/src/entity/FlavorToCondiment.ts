import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Condiment } from "./Condiment";
import { Flavor } from "./Flavor";

/**
 * 口味-调料 N-N关联实体
 */
@Entity()
export class FlavorToCondiment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  flavorId: number

  @Column()
  condimentId: number

  /**
   * 默认加量
   */
  @Column()
  selectDefault: 'tad' | 'less' | 'normal' | 'more' | 'excess' | 'none'

  /**
   * 描述
   */
  @Column()
  describe: string

  /**
   * 小贴士
   */
  @Column()
  tips: string

  /**
   * ORM 关联口味
   */
  @ManyToOne(() => Flavor)
  flavor: Flavor

  /**
   * ORM 关联调料
   */
  @ManyToOne(() => Condiment)
  condiment: Condiment

}