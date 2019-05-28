import { Message } from 'element-ui';
import router, { asyncRouterMap } from './router';
import store from './store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken, getSys } from '@/utils/auth';
import { treeToArray, generateRouter } from './utils';
import getPageTitle from '@/utils/get-page-title';

NProgress.configure({ showSpinner: false });

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const token = to.query.accessToken || getToken();
  const sysId = to.query.sysId || getSys();
  if (token && sysId) {
    if (to.path === '/login') {
      next();
      NProgress.done();
    } else if (store.getters.roles.length > 0) {
      next();
    } else {
      try {
        const { menus, roles } = await store.dispatch('user/getInfo');
        const asyncRouters = generateRouter(menus, roles, treeToArray(asyncRouterMap));
        await store.dispatch('permission/generateRoutes', { roles, asyncRouters });
        router.addRoutes(store.getters.addRouters);
        next({ ...to, replace: true });
      } catch (error) {
        await store.dispatch('user/resetToken');
        console.log(error);
        Message.error(error || 'Has Error');
        next(`/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next(`/login?redirect=${to.path}`);
    NProgress.done();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
