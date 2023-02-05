import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CustomProduct } from "./CustomProduct";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  orderId: string

  @Column()
  userId: number

  @Column()
  shopId: number

  @OneToMany(() => CustomProduct, customProduct => customProduct.order)
  products: CustomProduct[]

  @Column()
  status: 0 | 1 | 2 | 3 | 4 | 5 // 0-待接单 1-待支付 2-商家取消 3-顾客取消 4-制作中 5-完成

  /**
   * 支付金额
   */
  @Column()
  amount: number

  /**
   * 订单快照
   */
  @Column("json")
  snapshoot: unknown

  @Column()
  createTime: Date

  @Column()
  updateTime: Date
}