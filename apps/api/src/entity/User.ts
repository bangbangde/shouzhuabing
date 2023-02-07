import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Shop } from "./Shop"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    account: string

    @Column()
    nickname: string

    @Column({length: 11})
    phone: string

    @Column()
    createTime: Date

    @Column()
    updateTime: Date

    @Column()
    email: string

    @Column()
    openid: string

    @Column()
    memberNumber: string

    @OneToMany(type => Shop, shop => shop.owner )
    shops: Shop[]
}
