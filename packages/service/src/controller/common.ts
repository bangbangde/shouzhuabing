import Router from '@koa/router';
const router = new Router();

export const get = router.get.bind(router);
export const post = router.post.bind(router);
export const all = router.all.bind(router);

export default router;