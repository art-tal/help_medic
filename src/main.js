import Vue from 'vue'
import Vuelidate from "vuelidate"
import VueRouter from "vue-router"
import jQuery from "jquery"
import axios from "axios"
// import Cors from "cors"
import router from "./Route/route"
import store from "./store/store"
import App from './App.vue'
// axios.defaults.withCredentials = true;

Vue.use(jQuery);
Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(axios)
Vue.config.productionTip = false;
// Vue.use(Cors);

window.axios = require('axios');

// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const eventEmitter = new Vue();

// const $ = jQuery;
//
// $.ajaxSetup({
//   headers: {
//     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App),




}).$mount('#app');
