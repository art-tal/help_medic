import Vue from "vue"
import Vuex from "vuex"
// import jQuery from "jquery"

// const $ = jQuery;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: "Вхід",

        area: null,
        city: null,
        hospital: null,
        allowEdits: false,

    },

    getters: {
        getUser(state) {
            // if ($.cookie("allowEdits")){
            //     state.allowEdits = $.cookie("allowEdits");
            //     state.user = $.cookie('user');
            // }



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