import { paddingLeft } from './string';

// 生成从minNum到maxNum的随机数
function randomNum (minNum: number, maxNum: number) {
    switch (arguments.length) {
        case 1:
            return Math.random() * minNum + 1;
        case 2:
            return Math.random() * (maxNum - minNum + 1) + minNum;
        default:
            return 0;
    }
}

/**
 * 根据长度生成6位短信验证码
 * @example randomPhoneCode(6) 0000000-999999
 * @param {number} length 短信验证码长度，默认为6 (0000000-999999)
 */
function randomPhoneCode (length = 6) {
    let maxNumStr = '';
    for (let i = 0; i < length; i++) {
        maxNumStr += '9';
    }
    let maxNum = Number(maxNumStr);
    let codeNum = randomNum(0, maxNum);
    return paddingLeft(codeNum.toString(), length);
}

export {
    randomNum,
    randomPhoneCode
};
