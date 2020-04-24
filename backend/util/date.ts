import * as moment from 'moment-timezone';
moment.tz.setDefault("Asia/Shanghai");

/**
 * 获取今天开始时间，返回字符串 '2019-09-06T00:00:00.000Z'
 */
export function getTodayStart () {
    return moment().startOf('day').format('YYYY-MM-DDTHH:mm:ss.000Z');
}


/**
 * 获取今天结束时间，返回字符串 '2019-09-06T23:59:59.999Z'
 */
export function getTodayEnd () {
    let endDate = moment().endOf('day');
    return endDate.format('YYYY-MM-DDTHH:mm:ss.000Z');
}