import { login, logout, getInfo } from '../../api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';


const user = {
  namespaced: true,
  state: {
    token: getToken(),
    name: '',
    avatar: '',
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
  },
  actions: {
    // user login
    async login({ commit }, userInfo) {
      try {
        const res = await login(userInfo);
        const { token } = res.data;
        commit('SET_TOKEN', token);
        setToken(token);
        return res;
      } catch (err) {
        throw err;
      }
    },


    // get user info
    async getInfo({ commit, state }) {
      try {
        const res = await getInfo(state.token);
        const { name, avatar } = res.data;
        commit('SET_NAME', name);
        commit('SET_AVATAR', avatar);
        return res;
      } catch (err) {
        throw err;
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
