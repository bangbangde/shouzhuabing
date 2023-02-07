import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Flavor } from "./Flavor";
import { ProductToTrimming } from "./ProductToTrimming";
import { Shop } from "./Shop";

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  pictureSmall: string

  @Column("json")
  pictureLargr: string[]

  @Column()
  describe: string

  @ManyToOne(() => Shop, shop => shop.products)
  shop: Shop

  @OneToMany(type => ProductToTrimming, productToTrimming => productToTrimming.product)
  productToTrimmings: ProductToTrimming[]

  @OneToMany(() => Flavor, flavor => flavor.productId)
  flavors: Flavor[]
}