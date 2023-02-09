import { FlavorToCondiment } from "./FlavorToCondiment";
import { Product } from "./Product";
export declare class Flavor {
    id: number;
    productId: number;
    name: string;
    like: number;
    hot: boolean;
    recommended: boolean;
    flavorToCondiments: FlavorToCondiment[];
    product: Product;
}
//# sourceMappingURL=Flavor.d.ts.map