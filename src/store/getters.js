const getters = {
  // app
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // user
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  userId: state => state.user.userId,
  ogName: state => state.user.ogName,
  authList: state => state.user.authList,
  // permission
  permission_routes: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  // tagsView
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
};
export default getters;
