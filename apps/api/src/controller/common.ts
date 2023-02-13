import Router from '@koa/router';
const router = new Router();

export const get: typeof router.get  = router.get.bind(router);
export const post: typeof router.post  = router.post.bind(router);
export const all: typeof router.all = router.all.bind(router);

export default router;
