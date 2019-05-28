import { login, logout, getInfo } from '../../api/user';
import {
  getToken, setToken, removeToken, setSys, getSys,
} from '../../utils/auth';
import { resetRouter } from '@/router';

const user = {
  namespaced: true,
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    userId: '',
    roles: [],
    ogName: '',
    authList: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_OG_NAME: (state, ogName) => {
      state.ogName = ogName;
    },
    SET_AUTH_LIST: (state, authList) => {
      state.authList = [...authList];
    },
  },
  actions: {
    // user login
    // 登录
    async login({ commit }, data) {
      try {
        setSys(1);
        const loginData = {
          loginName: data.username,
          password: data.password,
        };
        const res = await login(loginData);
        const { userid, version } = res.data;
        const token = `${userid}_${version}`;
        commit('SET_TOKEN', token);
        setToken(token);
        return res;
      } catch (err) {
        throw err;
      }
    },


    // get user info
    // 获取用户信息
    async getInfo({ commit }) {
      try {
        const res = await getInfo(getSys());
        const {
          funPers, userName, roles, id,
        } = res.data;
        commit('SET_USER_ID', id);
        commit('SET_NAME', userName);
        const rolesList = [];
        roles.map((role) => {
          rolesList.push(role.roleCode);
        });
        commit('SET_ROLES', rolesList);
        return Promise.resolve({ menus: funPers[0].children, roles: rolesList });
      } catch (err) {
        return Promise.reject(err);
      }
    },

    // user logout
    async logout({ commit, state }) {
      try {
        const res = await logout(state.token);
        commit('SET_TOKEN', '');
        removeToken();
        resetRouter();
        return res;
      } catch (err) {
        throw err;
      }
    },

    // remove token
    resetToken({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },
  },
};
export default user;
