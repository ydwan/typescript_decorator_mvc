import { ResultEnum } from './index'

export default class Result {
    /**
     * 默认-1为失败
     * 404 为找不到
     * 808 已存在
     * 500 服务器错误
     * 999 无效
     */
    code: number = -1;
    message: string = '';
    data?: any;
    total?: number = 0;
}

export {
    ResultEnum
}