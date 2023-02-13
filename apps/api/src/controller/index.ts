// Docs: https://github.com/koajs/router/blob/master/API.md
import Koa from "koa";
import router, { get } from "./common";
import "./user";
import "./order";
get('ping', '/ping', async (ctx, next) => {
  ctx.body = `ping success: ${new Date().toLocaleTimeString()}`
  await next();
});
export default (app:Koa) => {
  app.use(router.routes());
  app.use(router.allowedMethods());
}
