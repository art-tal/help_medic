import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./Route/route"
import store from "./store/store"


Vue.config.productionTip = false;
Vue.use(VueRouter);

export const eventEmitter = new Vue();

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
