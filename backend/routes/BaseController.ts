
import { Controller, GET } from './decorator';
import * as KoaRouter from 'koa-router';

@Controller({ prefix: '/' })
class BaseController {

}

export default BaseController;
