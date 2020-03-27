import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        area: null,
        city: null,
        hospital: null,
    },

    getters: {
        getArea(state) {
            return state.area;
        },

        getCity(state) {
            return state.city;
        },

        getHospital(state) {
            return state.hospital;
        },
    },

    mutations: {},
})