import * as KoaRouter from 'koa-router'
import 'reflect-metadata';
import { paddingRight } from '../util/string';
import ResultModel, { ResultEnum, } from '../entity_enum/result';
import { ApiMethod } from '../entity_enum';
import { Action } from '../entity/action';
// import redisHelper from '../core/redis.helper';
// let redis = redisHelper('login:');


export const KOAROUTER = 'KOAROUTER';
export const PREFIX = 'PREFIX';



export class ReqOptions {
    // 路由path
    url: string = '/';
    // path名称
    name: string = '';
    // 路由请求方法
    method?: string = RequestMethod.GET;
    // 是否需要登录
    needLogin?: boolean = false;
    // 是否需要用户信息（有些接口需要用户信息，但是不强制用户登录，比如对当前文章是否点赞和收藏）
    needUserInfo?: boolean = false;
    // 请求参数
    reqBody?: string = '';
    // 返回结果
    resBody?: string = '';
}

/**
 * 
 * @param param0 
 */
export function Request(option: ReqOptions) {
    let {
        url = '/',
        method = RequestMethod.GET,
        needLogin = false,
        needUserInfo = false,
        reqBody = '',
        resBody = ''
    } = option;
    // 如果需要登录，那么肯定是需要用户信息的
    if (needLogin) {
        needUserInfo = true;
    }
    return function (target, name, descriptor) {
        let fn = descriptor.value
        descriptor.value = async (router) => {
            try {
                let prefix = Reflect.getMetadata(PREFIX, target.constructor) || '/';
                // 防止父类prefix 和 当前类prefix 开头没有 / ，进行补全
                let fullActionPath = '/' + prefix + '/' + url;
                // 将多余的 / 去除
                fullActionPath = fullActionPath.replace(/\/{2,999}/g, '/');
                if (fullActionPath.indexOf('/api') >= 0) {
                    let actionModel = new Action();
                    actionModel.path = fullActionPath;
                    actionModel.name = name;
                    actionModel.reqBody = reqBody;
                    actionModel.resBody = resBody;
                    actionModel.method = method as ApiMethod;
                    console.log('action 模型:', JSON.stringify(actionModel));
                    // 这里可以写自己的业务逻辑，把所有的API存储到自己的数据库
                }
                // paddingRight原因只为了console美观
                let methodsBeautify = paddingRight(`【${method.toUpperCase()}】`, 6, ' ');
                console.log(`${methodsBeautify} action path:  ${fullActionPath}`);
                router[method](url, async (ctx, next) => {
                    let result = new ResultModel();
                    result.code = ResultEnum.NOTAUTH;
                    result.message = '没有权限，请重新登录后重试';
                    let userInfo = null;
                    // 如果用户信息
                    if (needUserInfo) {
                        // 从cookie中获取对应的登录态
                        let { session_key } = ctx.request.cookie;
                        console.log('needUserInfo session_key:', session_key);
                        try {
                            // 请求redis获取当前登录的用户信息
                            // let loginCached = await redis.get(session_key);
                            // let loginInfo = JSON.parse(loginCached);
                            // userInfo = loginInfo.userInfo;
                            // ctx.headers.userInfo = userInfo;
                            // ctx.headers.local_userid = userInfo.id;
                        } catch (err) {
                        }
                    }
                    // 如果需要登录
                    if (needLogin) {
                        console.log('needlogin userInfo:', userInfo);
                        if (!userInfo) {
                            ctx.body = result;
                            return;
                        }
                    }
                    const res = await fn(ctx, next);
                })
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export const RequestMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

export function GET(option: ReqOptions) {
    return Request(option);
}

export function POST(option: ReqOptions) {
    return Request({ method: RequestMethod.POST, ...option });
}

export function PUT(option: ReqOptions) {
    return Request({ method: RequestMethod.PUT, ...option });
}

export function DELETE(option: ReqOptions) {
    return Request({ method: RequestMethod.DELETE, ...option });
}

export const Controller = ({ prefix = '/' }) => {
    let router = new KoaRouter()
    return target => {
        let parentPrefix = Reflect.getMetadata(PREFIX, target.prototype.constructor) || '/';
        // 防止父类prefix 和 当前类prefix 开头没有 / ，进行补全
        let prefixResult = '/' + parentPrefix + '/' + prefix;
        // 将多余的 / 去除
        prefixResult = prefixResult.replace(/\/{2,999}/g, '/');
        router.prefix(prefixResult);
        Reflect.defineMetadata(PREFIX, prefixResult, target);
        Reflect.defineMetadata(KOAROUTER, router, target);
        let reqList = Object.getOwnPropertyDescriptors(target.prototype)
        for (let v in reqList) {
            // 排除类的构造方法
            if (v !== 'constructor') {
                let fn = reqList[v].value
                fn(router)
            }
        }
        return target;
    }
}