import defaultSettings from '@/settings';

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings;
const settings = {
  namespaced: true,
  state: {
    showSettings,
    fixedHeader,
    sidebarLogo,
  },
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      // if (state.hasOwnProperty(key)) {
      if (Object.prototype.hasOwnProperty.call(key, state)) {
        state[key] = value;
      }
    },
  },
  actions: {
    changeSetting({ commit }, data) {
      commit('CHANGE_SETTING', data);
    },
  },
};
export default settings;
