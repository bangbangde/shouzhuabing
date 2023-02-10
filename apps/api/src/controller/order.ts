import {Order} from "../entity/Order";
import {post} from "./common";

/**
 * 根据shopId及订单状态查询订单信息
 * 商家接单页接口
 */
post('getOrderList', '/getOrderList', async (ctx, next) => {
  const { db } = ctx;
  const { shopId, status } = ctx.request?.body;
  const orderRepo = db.getRepository(Order);
  if (shopId == null) { // status可不传
    ctx.status = 400;
    return;
  }
  ctx.body = await orderRepo.findBy({shopId, status});
  await next();
});

post('changeOrderStatus', '/changeOrderStatus', async (ctx, next) => {
  const { db } = ctx;
  const { orderId } = ctx.request?.body;
  const orderRepo = db.getRepository(Order);
  if (orderId == null) {
    ctx.status = 400;
    return;
  }
  const order = await orderRepo.findOneById({id: orderId});
  if (order.status === 5) { // 还需要判断下其他状态。
    ctx.status = 500;
    ctx.body = '改订单已完成,无需重复完成';
  } else {
    await orderRepo.updateById(orderId, {status: 5});
    ctx.status = 200;
    ctx.body = {
      data: '订单完成'
    }
  }
  await next();
});
