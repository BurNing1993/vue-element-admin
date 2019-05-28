import View from '../views/View.vue';

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    `{"${
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ')
    }"}`,
  );
}

/*
* treeToArray
*/
export function treeToArray(data) {
  let tmp = [];
  Array.from(data).forEach((record) => {
    tmp.push(record);
    if (record.children && record.children.length > 0) {
      const children = treeToArray(record.children);
      tmp = tmp.concat(children);
    }
  });
  return tmp;
}


/**
 * @param {Array} menusTree 线上路由
 * @param {Array} roles 角色列表
 * @param {Array} asyncRouterArr 本地路由
 * @returns {Array}
 */
export function generateRouter(menusTree, roles, asyncRouterArr) {
  menusTree.map((item) => {
    item.path = item.frontRoute;
    item.meta = {
      id: item.id,
      title: item.title,
      icon: item.menuIcon,
      roles: [...roles],
    };
    const route = asyncRouterArr.find(routeItem => routeItem.path === item.frontRoute);
    if (route) {
      item.name = route.name;
      item.redirect = route.redirect;
      item.component = route.component;
    } else if (item.children) {
      item.component = View;
    } else {
      item.redirect = '/';
    }
    if (item.children) {
      generateRouter(item.children, roles, asyncRouterArr);
    } else {
      delete item.children;
    }
  });
  return menusTree;
}
