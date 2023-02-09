import { Condiment } from "./Condiment";
import { Flavor } from "./Flavor";
export declare class FlavorToCondiment {
    id: number;
    flavorId: number;
    condimentId: number;
    selectDefault: 'tad' | 'less' | 'normal' | 'more' | 'excess' | 'none';
    describe: string;
    tips: string;
    flavor: Flavor;
    condiment: Condiment;
}
//# sourceMappingURL=FlavorToCondiment.d.ts.map