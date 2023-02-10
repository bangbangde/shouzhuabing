import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Shop } from "./Shop"

/**
 * 用户实体
 */
@Entity()
export class User {

    /**
     * 系统使用，不暴露给用户，后期更换为雪花算法生成
     */
    @PrimaryGeneratedColumn()
    id: number

    /**
     * 账号
     */
    @Column()
    account: string

    /**
     * 昵称
     */
    @Column()
    nickname: string

    /**
     * 手机号
     */
    @Column({length: 11})
    phone: string

    /**
     * 邮箱
     */
    @Column()
    email: string

    /**
     * 微信 openid
     */
    @Column()
    openid: string

    /**
     * 会员编号
     */
    @Column()
    memberNumber: string

    /**
     * 数据插入时间
     */
    @Column()
    createTime: Date

    /**
     * 数据更新时间
     */
    @Column()
    updateTime: Date

    /**
     * ORM
     */
    @OneToMany(type => Shop, shop => shop.owner )
    shops: Shop[]
}
