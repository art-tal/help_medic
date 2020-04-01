import Vue from 'vue'
import Vuelidate from "vuelidate"
import VueRouter from "vue-router"
import router from "./Route/route"
import store from "./store/store"
import App from './App.vue'


Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.config.productionTip = false;

export const eventEmitter = new Vue();

new Vue({
  router,
  store,
  // vuelidate,
  render: h => h(App),

}).$mount('#app');
