
import ResultModel from '../../../entity_enum/result';
import { Controller, GET, POST } from '../../decorator';
import ApiController from '../ApiController';

@Controller({ prefix: '/hello' })
class BusinessController extends ApiController {
    @GET({
        path: '/',
        name: '你好世界！'
    })
    async index(ctx, next) {
        let model = new ResultModel();
        model.code = 0;
        model.data = 'Hello World!';
        ctx.body = model;
    }

    @POST({
        path: '/post',
        name: '我是一个post请求',
        reqBody: '{"a":1,"b":2}'
    })
    async post(ctx, next) {
        let { a, b } = ctx.request.body;
        let model = new ResultModel();
        model.code = 0;
        model.data = `${a},${b}`;
        ctx.body = model;
    }

}

export default BusinessController;

