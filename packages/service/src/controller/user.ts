import { post } from "./common";

/**
 * 根据用户id查询用户信息
 */
post('queryUserById', '/queryUserById', async (ctx, next) => {
  const { body } = ctx.request;
  console.log(body);
  if (body.id == null || body.id === '') throw new Error('400');
  await next();
});
