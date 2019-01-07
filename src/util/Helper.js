/**
 * @Author: Atishoo <Atishoo>
 * @Date:   2018-10-08
 * @Filename: Helper.js
 * @Last modified by:   Atishoo
 * @Last modified time: 2019-01-07
 * @Copyright: Atishoo
 */


function getFormatTime(timestamp = 0) {
  let time = new Date();
  if (timestamp > 0) {
    time = new Date(timestamp);
  }
  const padString = data => {
    data = `000000${data}`;
    return data.substr(data.length - 2);
  };

  return `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日 ${padString(
    time.getHours()
  )}:${padString(time.getMinutes())}:${padString(time.getSeconds())}`;
}

function getTimestamp() {
  return new Date().valueOf();
}


function generateStr(len = 16) {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pwd;
}


export { getFormatTime, getTimestamp, generateStr };
