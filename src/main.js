import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./Route/route"
import store from "./store/store"
// import * as VueGoogleMaps from 'vue2-google-maps'
//
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyDW89V9DN2EqYUa--Ogbv8Qrg-DRYNmdwc',
//     libraries: 'places',
//   },
//   installComponents: true
// });
//
// Vue.use(VueGoogleMaps, {
//   load: {
//     region: 'UA',
//     language: 'ua',
//   },
// });

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
