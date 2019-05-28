import request from '../utils/request';

export function login(data) {
  return request({
    url: '/sso/login',
    method: 'POST',
    data,
  });
}

export function getInfo(sysId) {
  return request({
    url: '/sso/getUserDetail',
    method: 'GET',
    params: { sysId },
  });
}


export function logout() {
  return request({
    url: '/sso/logout',
    method: 'POST',
  });
}

export function getAuthList(menuId) {
  return request({
    url: '/sso/menus/getChildrenMenus',
    method: 'GET',
    params: { menuId },
  });
}
