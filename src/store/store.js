import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        user: "",

        area: null,
        city: null,
        hospital: null,
        allowEdits: false,

    },

    getters: {
        getUser(state) {
            return state.user;
        },

        getArea(state) {
            return state.area;
        },

        getCity(state) {
            return state.city;
        },

        getHospital(state) {
            return state.hospital;
        },

        getAllowEdits(state) {
            return state.allowEdits;
        },

    },

    mutations: {},
})