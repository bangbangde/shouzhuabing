/// <reference types="koa" />
/// <reference types="koa__router" />
import Router from '@koa/router';
declare const router: Router<import("koa").DefaultState, import("koa").DefaultContext>;
export declare const get: {
    <T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Router.Middleware<import("koa").DefaultState & T, import("koa").DefaultContext & U, B>[]): Router<import("koa").DefaultState, import("koa").DefaultContext>;
    <T_1 = {}, U_1 = {}, B_1 = unknown>(path: string | RegExp | (string | RegExp)[], ...middleware: Router.Middleware<import("koa").DefaultState & T_1, import("koa").DefaultContext & U_1, B_1>[]): Router<import("koa").DefaultState, import("koa").DefaultContext>;
};
export declare const post: {
    <T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Router.Middleware<import("koa").DefaultState & T, import("koa").DefaultContext & U, B>[]): Router<import("koa").DefaultState, import("koa").DefaultContext>;
    <T_1 = {}, U_1 = {}, B_1 = unknown>(path: string | RegExp | (string | RegExp)[], ...middleware: Router.Middleware<import("koa").DefaultState & T_1, import("koa").DefaultContext & U_1, B_1>[]): Router<import("koa").DefaultState, import("koa").DefaultContext>;
};
export declare const all: {
    <T = {}, U = {}, B = unknown>(name: string, path: string | RegExp, ...middleware: Router.Middleware<import("koa").DefaultState & T, import("koa").DefaultContext & U, B>[]): Router<import("koa").DefaultState, import("koa").DefaultContext>;
    <T_1 = {}, U_1 = {}, B_1 = unknown>(path: string | RegExp | (string | RegExp)[], ...middleware: Router.Middleware<import("koa").DefaultState & T_1, import("koa").DefaultContext & U_1, B_1>[]): Router<import("koa").DefaultState, import("koa").DefaultContext>;
};
export default router;
//# sourceMappingURL=common.d.ts.map