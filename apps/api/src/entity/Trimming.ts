import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { ProductToTrimming } from "./ProductToTrimming";

@Entity()
export class Trimming {

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

  @OneToMany(type => ProductToTrimming, productToTrimming => productToTrimming.trimming)
  productToTrimmings: ProductToTrimming[]
}