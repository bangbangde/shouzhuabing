// Docs: https://github.com/koajs/router/blob/master/API.md
import Koa from "koa";
import router from "./common";
import "./user";

export default (app:Koa) => {
  app.use(router.routes());
  app.use(router.allowedMethods());
}