import defaultSettings from '@/settings';

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings;

const state = {
  showSettings,
  fixedHeader,
  sidebarLogo,
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // if (state.hasOwnProperty(key)) {
    if (Object.prototype.hasOwnProperty.call(key, state)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
