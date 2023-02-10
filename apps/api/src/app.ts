import Koa from 'koa';
import koaBody from 'koa-body';
import session from 'koa-session';
import controller from './controller';
import { AppDataSource } from "./data-source"

const app = new Koa();

// common
app.use(async (ctx, next) => {
  const {method} = ctx;
  if(method === 'OPTIONS') {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', '*');
    return ctx.status = 200;
  } 
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  ctx.set('Access-Control-Allow-Origin', `*`);
});

app.use(session(app));
app.use(koaBody());

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

controller(app);


AppDataSource.initialize().then(async () => {
  console.log('AppDataSource initialized');
  app.context.db = AppDataSource;
  app.listen(3000);
}).catch((error: Error) => console.log(error))
