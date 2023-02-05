import { User } from "../entity/User";
import { post } from "./common";

/**
 * 根据用户id查询用户信息
 */
post('queryUserById', '/queryUserById', async (ctx, next) => {
  const {db} = ctx;
  const { id } = ctx.request?.body;
  const userRepo = db.getRepository(User);
  if (id == null || id === '') {
    ctx.status = 400;
    return;
  }
  const user = await userRepo.findOneBy({id})
  ctx.body = user
  await next();
});
