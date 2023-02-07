import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Order } from "./Order";

@Entity()
export class CustomProduct {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: number

  @Column()
  productId: number

  @Column()
  quantity: number

  /**
   * 客制化选项，冗余保存
   */
  @Column('json')
  customization: unknown

  /**
   * 下单时单价
   */
  @Column()
  unitPrice: number

  @ManyToOne(() => Order, order => order.products)
  order: Order
}