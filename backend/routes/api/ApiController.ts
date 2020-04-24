
import { Controller, GET } from '../decorator';
import BaseController from '../BaseController';

@Controller({ prefix: '/api' })
class ApiController extends BaseController {
}

export default ApiController;
