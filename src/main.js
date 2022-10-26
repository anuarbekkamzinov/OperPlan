// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import vuetify from '@/plugins/vuetify';

import Vue from 'vue';
import Photoswipe from 'vue-pswipe';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Photoswipe, {
  bgOpacity: 1,
  escKey: true,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuetify,
});
