/**
 * 产生指定长度的随机字符串
 *
 * @export
 * @param [length=8] 字符串长度，默认为 16
 * @param [charset] 默认为大小写字母加数字
 * @returns
 */

const defaultRandomCharset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function randomString(length = 16, charset?: string): string {
  let token = "";
  charset = charset || defaultRandomCharset;

  for (let i = 0; i < length; i++) {
    token += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return token;
}
