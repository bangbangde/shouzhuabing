import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./Product"
import { Trimming } from "./Trimming"

@Entity()
export class ProductToTrimming {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productId: number

    @Column()
    trimmingId: number

    @Column()
    quantityDefault: number

    @Column()
    quantityMax: number

    @Column()
    quantityMin: number

    @ManyToOne(() => Product, product => product.productToTrimmings)
    product: Product

    @ManyToOne(() => Trimming, trimming => trimming.productToTrimmings)
    trimming: Trimming
}