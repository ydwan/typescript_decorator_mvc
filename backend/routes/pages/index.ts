
import { Controller, GET } from '../decorator';

@Controller({ prefix: '/' })
class PageController {
    @GET({
        path: '/',
        name: '页面根路由'
    })
    async index (ctx, next) {
        await ctx.render('index', {
            title: '权限认证demo'
        })
    }
}

export default PageController;
