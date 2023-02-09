import { Flavor } from "./Flavor";
import { ProductToTrimming } from "./ProductToTrimming";
import { Shop } from "./Shop";
export declare class Product {
    id: number;
    name: string;
    price: number;
    pictureSmall: string;
    pictureLargr: string[];
    describe: string;
    shop: Shop;
    productToTrimmings: ProductToTrimming[];
    flavors: Flavor[];
}
//# sourceMappingURL=Product.d.ts.map