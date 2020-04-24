
/**
 * 将传入的值左边补全至指定长度
 * @example 将1补为6位， 000001
 * @param {any} val
 * @param {number} totalLeng 总长度
 * @param {String} symbol 
 */
export function paddingLeft (val = '', totalLeng = 0, symbol = '0') {
    let StrLengt = val.toString().length;
    let result = [val.toString()];
    if (StrLengt < totalLeng) {
        let num = totalLeng - StrLengt;
        for (let i = 0; i < num; i++) {
            result.unshift(symbol);
        }
    }
    return result.toString().replace(/,/g, '');
}

/**
 * 将传入的值右边补全至指定长度
 * @example 将1补为6位， 1000000
 * @param {any} val
 * @param {number} totalLeng 总长度
 * @param {String} symbol 
 */
export function paddingRight (val = '', totalLeng = 0, symbol = '0') {
    let StrLengt = val.toString().length;
    let result = [val.toString()];
    if (StrLengt < totalLeng) {
        let num = totalLeng - StrLengt;
        for (let i = 0; i < num; i++) {
            result.push(symbol);
        }
    }
    return result.toString().replace(/,/g, '');
}