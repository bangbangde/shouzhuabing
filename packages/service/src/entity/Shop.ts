import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Product } from "./Product"
import { User } from "./User"

@Entity()
export class Shop {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phone: string

    @Column()
    name: string

    @Column()
    address: string

    @Column()
    provinceCode: number

    @Column()
    cityCode: number

    @Column()
    areaCode: number

    @Column()
    score: number

    @Column("text")
    describe: string

    @Column()
    notice: string

    @Column()
    pictureHeader: string

    @Column()
    avatar: string

    @ManyToOne(type => User, user => user.shops)
    owner: User

    @Column()
    wechatQrcode: string

    @Column()
    createTime: Date

    @Column()
    updateTime: Date

    @OneToMany(() => Product, product => product.shop)
    products: Product[]
}
