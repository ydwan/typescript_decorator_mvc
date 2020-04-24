export enum defaultEnum {
    //启用
    ENABLED = 'ENABLED',
    //禁用
    DISABLED = 'DISABLED',
    //已删除
    DELETED = 'DELETED'
}

export enum ResultEnum {
    //默认的值，表示错误
    ERROR = -1,
    //处理成功
    SUCCESS = 0,
    //找不到该数据
    NOTFOUND = 404,
    //服务器错误，则表示进入到catch流
    SERVERFAIL = 500,
    //已存在
    EXIST = 808,
    //没有权限
    NOTAUTH = 999
}

export enum notificationEnum {
    COMMENT = 'COMMENT',
    LIKE = 'LIKE'
}

export enum actionEnum {
    VIEW = 'VIEW',
    API = 'API'
}

export enum ApiMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

export enum genderEnum {
    // 男性
    MAN = 1,
    // 女性
    WOMAN = 2,
    // 未知
    UNKNOWN = 0
}

// 验证码发送类型
export enum phoneCodeTypeEnum {
    // 关联（绑定）账户
    LINKUSER = 'LINKUSER',
    // 注册
    REGISTER = 'REGISTER',
    // 忘记
    FORGET = 'FORGET',
    // 解绑
    UNBIND = 'UNBIND'
}