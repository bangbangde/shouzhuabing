import { Order } from "./Order";
export declare class CustomProduct {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    /**
     * 客制化选项，冗余保存
     */
    customization: unknown;
    /**
     * 下单时单价
     */
    unitPrice: number;
    order: Order;
}
//# sourceMappingURL=CustomProduct.d.ts.map