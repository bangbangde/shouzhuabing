import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { ProductToTrimming } from "./ProductToTrimming";

/**
 * 供客制化的附加食材
 * 如：火腿 培根 肉松等
 */
@Entity()
export class Trimming {

  @PrimaryGeneratedColumn()
  id: number

  /**
   * 食材名称
   */
  @Column()
  name: string

  /**
   * 单价
   */
  @Column()
  price: number

  /**
   * 小图
   */
  @Column()
  pictureSmall: string

  /**
   * 图集
   */
  @Column("json")
  pictureLargr: string[]

  /**
   * 描述
   */
  @Column()
  describe: string

  /**
   * ORM 关联到产品
   */
  @OneToMany(type => ProductToTrimming, productToTrimming => productToTrimming.trimming)
  productToTrimmings: ProductToTrimming[]
}