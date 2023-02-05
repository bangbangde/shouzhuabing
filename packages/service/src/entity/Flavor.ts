import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FlavorToCondiment } from "./FlavorToCondiment";
import { Product } from "./Product";

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: number

  @Column()
  name: string

  @Column()
  like: number

  @Column()
  hot: boolean

  @Column()
  recommended: boolean

  @OneToMany(() => FlavorToCondiment, flavorToCondiment => flavorToCondiment.flavor)
  flavorToCondiments: FlavorToCondiment[]

  @ManyToOne(() => Product, product => product.flavors)
  product: Product
}