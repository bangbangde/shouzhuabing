import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Product } from "./Product"
import { User } from "./User"

/**
 * 店铺
 */
@Entity()
export class Shop {

    @PrimaryGeneratedColumn()
    id: number

    /**
     * 店铺号码
     */
    @Column()
    phone: string

    /**
     * 店铺名称
     */
    @Column()
    name: string

    /**
     * 详细地址
     */
    @Column()
    address: string

    /**
     * 省编码
     */
    @Column()
    provinceCode: number

    /**
     * 市编码
     */
    @Column()
    cityCode: number

    /**
     * 区编码
     */
    @Column()
    areaCode: number

    /**
     * 店铺评分
     */
    @Column()
    score: number

    /**
     * 店铺描述
     */
    @Column("text")
    describe: string

    /**
     * 店铺公告
     */
    @Column()
    notice: string

    /**
     * 店铺大图
     */
    @Column()
    pictureHeader: string

    /**
     * 店铺头像
     */
    @Column()
    avatar: string

    /**
     * 微信二维码（加好友）
     */
    @Column()
    wechatQrcode: string

    @Column()
    createTime: Date

    @Column()
    updateTime: Date

    /**
     * 店主
     */
    @ManyToOne(type => User, user => user.shops)
    owner: User

    /**
     * 产品
     */
    @OneToMany(() => Product, product => product.shop)
    products: Product[]
}
