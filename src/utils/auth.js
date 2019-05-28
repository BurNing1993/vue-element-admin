import Cookies from 'js-cookie';

const TokenKey = 'xxl_sso_sessionid';
const SysKey = 'sys_id';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 7 });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function setSys(sysId) {
  return Cookies.set(SysKey, sysId);
}

export function getSys() {
  return Cookies.get(SysKey);
}
