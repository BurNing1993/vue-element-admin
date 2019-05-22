import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets


import '@/styles/index.scss'; // global css

import App from './App.vue';
import store from './store';
import router from './router';

import '@/permission'; // permission control

import './plugins/element';
import './plugins/icons';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
