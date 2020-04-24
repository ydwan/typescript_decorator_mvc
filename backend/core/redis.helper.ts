import Redis from 'ioredis';
const redisConfig = {
    port: 6179,          // Redis port
    host: '',   // Redis host
    prefix: 'sam:', //存诸前缀
    ttl: 60 * 60 * 23,  //过期时间   
    family: 4,
    db: 0,
    password: ''
}

/**
 * 创建redis请求实例
 * @param {String} prefix 前缀
 * @param {Number} ttl 过期时间
 */
function createConnect(prefix = 'com:', ttl = 60 * 60 * 23) {
    return new Redis({ ...redisConfig, prefix, ttl })
}

export default createConnect;