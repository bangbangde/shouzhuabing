import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Shop } from "./entity/Shop"
import { Product } from "./entity/Product"
import { Trimming } from "./entity/Trimming"
import { ProductToTrimming } from "./entity/ProductToTrimming"
import { Flavor } from "./entity/Flavor"
import { Condiment } from "./entity/Condiment"
import { FlavorToCondiment } from "./entity/FlavorToCondiment"
import { Order } from "./entity/Order"
import { CustomProduct } from "./entity/CustomProduct"
import dotenv from "dotenv"

dotenv.config();
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: MYSQL_HOST,
    port: MYSQL_PORT ? Number(MYSQL_PORT) : 3306,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    synchronize: false,
    logging: false,
    entities: [User, Shop, Product, Trimming, ProductToTrimming, Flavor, Condiment, FlavorToCondiment, Order, CustomProduct],
    migrations: [],
    subscribers: [],
})

// AppDataSource.initialize()
//     .then(async () => {
//         const rep = AppDataSource.getRepository(User)
//         const user = await rep.findOneBy({id: 1})
//         if (user) {
//             user.nickname = 'Frank2'
//             rep.remove(user)
//         }
//     })
//     .catch((error) => console.log(error))

