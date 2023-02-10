import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./Product"
import { Trimming } from "./Trimming"

/**
 * 产品-附加食材 N-N 关联实体
 */
@Entity()
export class ProductToTrimming {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productId: number

    @Column()
    trimmingId: number

    /**
     * 默认加料量
     */
    @Column()
    quantityDefault: number

    /**
     * 最大加料量
     */
    @Column()
    quantityMax: number

    /**
     * 最小加料量
     */
    @Column()
    quantityMin: number

    /**
     * 食材计数单位
     * 如：个、份、克、勺等 
     */
    @Column()
    unit: string

    /**
     * ORM 关联产品
     */
    @ManyToOne(() => Product, product => product.productToTrimmings)
    product: Product

    /**
     * ORM 关联食材
     */
    @ManyToOne(() => Trimming, trimming => trimming.productToTrimmings)
    trimming: Trimming
}