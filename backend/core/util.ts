import * as crypto from 'crypto';
/**
 * 传入密码转换为MD5密码
 */
export function createPassword4MD5 (password) {
    const firHash = crypto.createHash('md5');
    const secHash = crypto.createHash('md5');
    let halfLength = Math.floor(password.length / 2);

    let firStr = password.substr(0, halfLength);
    let secStr = password.substr(halfLength, password.length);

    firHash.update(firStr);
    let firPass = firHash.digest('hex');
    secHash.update(secStr);
    let secPass = secHash.digest('hex');

    return firPass.substr(0, firPass.length / 2) + secPass.substr(secPass.length / 2, secPass.length);
}