import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FlavorToCondiment } from "./FlavorToCondiment";
import { Product } from "./Product";

/**
 * 口味实体
 * 如：甜辣、变态辣、原味。
 * 关联到了产品与调料实体
 */
@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: number

  /**
   * 口味名称
   */
  @Column()
  name: string

  /**
   * 点赞数
   */
  @Column()
  like: number

  /**
   * 热门
   */
  @Column()
  hot: boolean

  /**
   * 推荐
   */
  @Column()
  recommended: boolean

  /**
   * ORM 关联到调料
   */
  @OneToMany(() => FlavorToCondiment, flavorToCondiment => flavorToCondiment.flavor)
  flavorToCondiments: FlavorToCondiment[]

  /**
   * ORM 关联到产品
   */
  @ManyToOne(() => Product, product => product.flavors)
  product: Product
}