import { Product } from "./Product";
import { User } from "./User";
export declare class Shop {
    id: number;
    phone: string;
    name: string;
    address: string;
    provinceCode: number;
    cityCode: number;
    areaCode: number;
    score: number;
    describe: string;
    notice: string;
    pictureHeader: string;
    avatar: string;
    owner: User;
    wechatQrcode: string;
    createTime: Date;
    updateTime: Date;
    products: Product[];
}
//# sourceMappingURL=Shop.d.ts.map