import { CustomProduct } from "./CustomProduct";
export declare class Order {
    id: number;
    orderId: string;
    userId: number;
    shopId: number;
    products: CustomProduct[];
    status: 0 | 1 | 2 | 3 | 4 | 5;
    /**
     * 支付金额
     */
    amount: number;
    /**
     * 订单快照
     */
    snapshoot: unknown;
    createTime: Date;
    updateTime: Date;
}
//# sourceMappingURL=Order.d.ts.map