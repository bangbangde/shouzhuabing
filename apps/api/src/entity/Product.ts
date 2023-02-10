import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Flavor } from "./Flavor";
import { ProductToTrimming } from "./ProductToTrimming";
import { Shop } from "./Shop";

/**
 * 产品实体
 */
@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number

  /**
   * 产品名称
   */
  @Column()
  name: string

  /**
   * 单价
   */
  @Column()
  price: number

  /**
   * 产品小图
   */
  @Column()
  pictureSmall: string

  /**
   * 产品图集
   */
  @Column("json")
  pictureLargr: string[]

  /**
   * 产品描述
   */
  @Column()
  describe: string

  /**
   * 所属店铺
   */
  @ManyToOne(() => Shop, shop => shop.products)
  shop: Shop

  /**
   * ORM 关联到支持客制化的附加食材
   */
  @OneToMany(type => ProductToTrimming, productToTrimming => productToTrimming.product)
  productToTrimmings: ProductToTrimming[]

  /**
   * ORM 产品支持客制化的口味
   */
  @OneToMany(() => Flavor, flavor => flavor.productId)
  flavors: Flavor[]
}