import ControllersMap from '../routes/index';
import { PREFIX, KOAROUTER } from '../routes/decorator'
import 'reflect-metadata';

function registerRoutes (app) {
    // 注册各个url要使用的路由文件
    let Controllers = Object.keys(ControllersMap).forEach(key => {
        let Controller = ControllersMap[key];
        let router = Reflect.getMetadata(KOAROUTER, Controller);
        let prefix = Reflect.getMetadata(PREFIX, Controller);
        console.log('controller prefix: ', prefix);
        app.use(router.routes(), router.allowedMethods());
    });
};

export {
    registerRoutes
}