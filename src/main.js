import Vue from 'vue'
import Vuelidate from "vuelidate"
import VueRouter from "vue-router"
import jQuery from "jquery"
import axios from "axios"
import router from "./Route/route"
import store from "./store/store"
import App from './App.vue'

Vue.use(jQuery);
Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(axios);
Vue.config.productionTip = false;

window.axios = require('axios');

export const eventEmitter = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app');
